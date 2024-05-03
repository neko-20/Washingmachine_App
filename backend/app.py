import mimetypes
mimetypes.add_type('application/javascript', '.js')

from flask import Flask, render_template, request
import pandas as pd
import ast

df1 = pd.read_csv(" ") # 保存csvディレクトリ指定
df2 = pd.read_csv(" ") # 保存csvディレクトリ指定
for df in [df1, df2]:
    df['text1'] = [ast.literal_eval(d) for d in df['text_top20']]
    df['text2'] = [ast.literal_eval(d) for d in df['tfidf_top20']]
    df = df[['prdname', 'prdmaker', 'prdimg', 'star', 'text1', 'text2']]

df_w = pd.read_csv(" ") # 保存csvディレクトリ指定
df_w = df_w[['prdname', 'star', 'title', 'detail', 'comment']]

app = Flask(__name__, static_folder='./public/static', template_folder='./public')

@app.route('/',defaults={'path':''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    return df1.to_json(orient='records', force_ascii=False)

@app.route('/api/data2')
def get_data2():
    return df2.to_json(orient='records', force_ascii=False)

@app.route('/api/comment')
def get_comment():
    prdname = request.args.get('prdname')
    df = df_w[df_w['prdname'] == prdname]
    return df.to_json(orient='records', force_ascii=False)

if __name__=='__main__':
    app.run(debug=True)
