# ionic_chat
first study mobile app develop

# ionic环境配置
- 安装nodejs，官网：https://nodejs.org/en/download/、npm，官网：https://docs.npmjs.com/getting-started/installing-node
- 安装cordova， npm install -g cordova， 验证安装成功：cordova --version 
- 安装ionic， npm install -g ionic， 验证安装成功： ionic --version
- 测试ionic，创建一个app  
    > mkdir /home/joysy/ionic_dev
    > cd /home/joysy/ionic_dev
    > ionic start ioapp_app_sidemenu sidemenu
    > cd ioapp_app_sidemenu
    > ionic setup sass    # 如果出错，使用npm安装gulp即可
    > ionic serve   # 浏览器查看

- 添加平台：ionic platform add android
- 安装JDK
    > cd /opt/
    > wget http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz
    > tar -xzvf jdk-7u79-linux-x64.tar.gz
    > cd /opt/jdk1.7.0_79/

    设置环境变量： 
    > export JAVA_HOME=/opt/jdk1.7.0_79
    > export JRE_HOME=/opt/jdk1.7.0_79/jre
    > export PATH=$PATH:/opt/jdk1.7.0_79/bin:/opt/jdk1.7.0_79/jre/bin

    安装成功： java -version

- 安装Android sdk
   >  wget http://dl.google.com/android/android-sdk_r24.3.4-linux.tgz
   >  解压到/opt/android-sdk-linux/
   >  设置环境变量：
   >  export ANDROID_HOME=/opt/android-sdk-linux
   >  export PATH=$PATH:/opt/android-sdk-linux/tools:/opt/android-sdk-linux/platform-tools

- 更新bash环境 source ~/.bashrc

- 查看android可安装的包：  android list sdk --all

- 安装指定包：android update sdk -u -a -t <package no.>

- ionic build android    or  cordova build android



``注： 安装依赖包 ``

sudo apt-get install lib32stdc++6
sudo apt-get install lib32z1

