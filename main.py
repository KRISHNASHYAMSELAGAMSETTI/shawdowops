
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from integrations.zapier_launcher import launch_micro_saas

app = FastAPI()

class OpportunityRequest(BaseModel):
    interests: list[str] = []

class DeployRequest(BaseModel):
    project_name: str
    niche: str
    target_url: str

@app.post("/generate-opportunity")
def generate_opportunity(request: OpportunityRequest):
    return {
        "niche": "AI-powered Study Planner",
        "reason": "Trending among students, low monetization, high engagement.",
        "micro_saas_idea": "Web app that builds dynamic study plans using LLMs."
    }

@app.post("/deploy-automation")
def deploy_automation(request: DeployRequest):
    result = launch_micro_saas(
        project_name=request.project_name,
        niche=request.niche,
        target_url=request.target_url
    )
    return {
        "status": result.get("status"),
        "message": result.get("details", "Deployment simulated.")
    }
