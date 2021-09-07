from flask import Flask, redirect, url_for, request
app = Flask(__name__)
 
@app.route('/success/<name>') ##dis - URL binded with dis function
def success(name):
    return 'welcome %s' % name
 
@app.route('/login',methods = ['POST', 'GET']) ##initiates this function when this url in server is reached
def login():
    if request.method == 'POST':
        user = request.form['nm']
        return redirect(url_for('success',name = user))
    else:
        user = request.args.get('nm') ##does the same thing as POST
        return redirect(url_for('success',name = user))

if __name__ == '__main__':
    app.run()
