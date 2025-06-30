## The Voice Synthesis model used in this project is a modification to [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)
This project includes a modified version of GPT-SoVITS (MIT Licensed). Changes include:
- Integration with a FastAPI backend
- Dockerfile modifications for deployment
- Added endpoints for English, Chinese, and  Japanese synthesis
- Frontend (WIP), backend route callable at API endpoint: https://api.273460892.xyz/synthesize/{language} where {language} is one of: en, jp, cn.
