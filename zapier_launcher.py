
import requests

def launch_micro_saas(project_name, niche, target_url):
    zapier_webhook_url = "https://hooks.zapier.com/hooks/catch/23833657/u2ateax/"  # Replace with real Zapier webhook

    payload = {
        "project_name": project_name,
        "niche": niche,
        "target_url": target_url
    }

    try:
        response = requests.post(zapier_webhook_url, json=payload)
        response.raise_for_status()
        return {"status": "success", "details": response.text}
    except requests.exceptions.RequestException as e:
        return {"status": "error", "message": str(e)}
