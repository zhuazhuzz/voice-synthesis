from fastapi import FastAPI, Form
from fastapi.responses import StreamingResponse
from infer_general import synthesize_to_memory

app = FastAPI()

#CORS
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ["https://your-github-pages-domain"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rate Limit
# from slowapi import Limiter, _rate_limit_exceeded_handler
# from slowapi.util import get_remote_address
# from fastapi import FastAPI, Request
# from slowapi.errors import RateLimitExceeded

# limiter = Limiter(key_func=get_remote_address)
# app.state.limiter = limiter
# app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


# Chinese =======================================================================================
@app.post("/synthesize/cn")
# @limiter.limit("5/15seconds")
def synthesize_audio(target_text: str = Form(...)):
    buf = synthesize_to_memory(
        GPT_model_path="GPT_weights_v4/cn_gen2-e15.ckpt",
        SoVITS_model_path="SoVITS_weights_v4/cn_gen2_e2_s200_l32.pth",
        ref_audio_path="GPT_SoVITS/file/audio/cn/20170001P00002I0093.wav",
        ref_text_path="GPT_SoVITS/file/txt/cngen/cngen.txt",
        ref_language="中文",
        target_text=target_text,
        target_language="中文",
    )
    if buf is None:
        return {"error": "Inference failed"}

    return StreamingResponse(buf, media_type="audio/wav")

# Japanese =======================================================================================
@app.post("/synthesize/jp")
# @limiter.limit("5/15seconds")
def synthesize_audio(target_text: str = Form(...)):
    buf = synthesize_to_memory(
        GPT_model_path="GPT_weights_v4/jpgeneric-e15.ckpt",
        SoVITS_model_path="SoVITS_weights_v4/jp_gen2_e2_s190_l32.pth",
        ref_audio_path="GPT_SoVITS/file/audio/jp/jpgen/VOICEACTRESS100_001.wav",
        ref_text_path="GPT_SoVITS/file/txt/jpgen/jpgen.txt",
        ref_language="日文",
        target_text=target_text,
        target_language="日文",
    )
    if buf is None:
        return {"error": "Inference failed"}

    return StreamingResponse(buf, media_type="audio/wav")

# English =======================================================================================
@app.post("/synthesize/en")
#@limiter.limit("5/15seconds")
def synthesize_audio(target_text: str = Form(...)):
    buf = synthesize_to_memory(
        GPT_model_path="GPT_weights_v4/en_gen2-e15.ckpt",
        SoVITS_model_path="SoVITS_weights_v4/en_gen2_e2_s184_l32.pth",
        ref_audio_path="GPT_SoVITS/file/audio/en/251_137823_000005_000000.wav",
        ref_text_path="GPT_SoVITS/file/txt/engen/engen.txt",
        ref_language="英文",
        target_text=target_text,
        target_language="英文",
    )
    if buf is None:
        return {"error": "Inference failed"}

    return StreamingResponse(buf, media_type="audio/wav")
