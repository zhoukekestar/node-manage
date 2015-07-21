
Update your nodejs project by svn (OR git) & Restart your node-server by web.

通过网页更新你的nodejs项目（使用svn或git），并重启你的nodejs服务器。这样就不需要任何服务器的权限，也不需要任何繁琐的linux命令。你只需要提交代码到指定的svn，并打开网页点击一下按钮就可以重新部署并发布你的nodejs项目了。


## Start node manage.
### Edit node-restart.sh:

* Set your node env
* Set your project's svn dir.

### Make node-restart.sh executable

### Edit your index.html:

* new WebSocket('ws://192.168.1.201:3001'); > new WebSocket('ws://your-ip-address:3001');

## Prot
* 3000 app.js
* 3001 manage.js


