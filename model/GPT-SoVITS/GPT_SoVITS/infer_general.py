# inference.py

import io
import soundfile as sf
from tools.i18n.i18n import I18nAuto
from GPT_SoVITS.inference_webui import change_gpt_weights, change_sovits_weights, get_tts_wav

i18n = I18nAuto()

def synthesize_to_memory(
    GPT_model_path,
    SoVITS_model_path,
    ref_audio_path,
    ref_text_path,
    ref_language,
    target_text,
    target_language,
):
    # Read reference text
    with open(ref_text_path, "r", encoding="utf-8") as file:
        ref_text = file.read()

    # Set model weights
    change_gpt_weights(gpt_path=GPT_model_path)
    change_sovits_weights(sovits_path=SoVITS_model_path)

    # Run inference
    result_list = list(get_tts_wav(
        ref_wav_path=ref_audio_path,
        prompt_text=ref_text,
        prompt_language=i18n(ref_language),
        text=target_text,
        text_language=i18n(target_language),
        top_p=1,
        temperature=1,
    ))

    if not result_list:
        return None

    sample_rate, audio_data = result_list[-1]
    buf = io.BytesIO()
    sf.write(buf, audio_data, sample_rate, format="WAV")
    buf.seek(0)
    return buf

# In Memory only