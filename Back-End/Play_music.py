from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL, MySQLdb

app = Flask(__name__)

app.config['SECRET_KEY'] = 'Thisissupposedtobesecret!'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['MYSQL_DB'] = 'mydb'

mysql = MySQL(app)


@app.route('/home', methods=['GET'])
def home():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT * FROM ca_si")
    ca_si = cur.fetchall()  
    cur.close()
    return jsonify(ca_si)

@app.route('/play_music', methods=['GET'])
def play_music():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT * FROM bai_hat")
    bai_hat = cur.fetchall()  
    cur.close()
    return jsonify(bai_hat)

if __name__ == "__main__":
    app.run(debug= True)