
from flask import Flask, send_from_directory
from flask_cors import CORS

from datetime import datetime

app = Flask(__name__, static_folder='../client/public')
CORS(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/time')
def get_current_time():
    now = datetime.now()
    app.logger.info(now)
    # return {'time': time.time()}
    return {"time": now.strftime('%I:%M:%S')}
