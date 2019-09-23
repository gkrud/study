# nodeJS 서버 배포 방법

**일단 인스턴스를 만들어야지만 서버를 배포할 수 있다.**

1. 인스턴스 연결

인스턴스를 만들때 같이 만들었던 키페어 파일이 있는 폴더를 열고 터미널을 키고
```
ssh -i <키페어 파일 이름> ubuntu@<퍼블릭 DNS>
```
이런 식으로 입력을한다.

![캡처](https://user-images.githubusercontent.com/38375812/63614482-272ba100-c61e-11e9-82fa-785417fda6c0.PNG)

이렇게 나타난다면 성공적으로 인스턴스에 연결이 된것이다.

2. PPA를 이용한 nodeJS 설치

다른 버전을 설치하기 위해선 아래 curl 명령어의 10.x 문자를 원하는 버전으로 수정하여 다운로드 받으면 된다.

```
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
```

sudo 권한으로 다음 명령어를 실행하면 PPA를 추가하고 업데이트까지 자동으로 실행된다.
```
sudo bash nodesource_setup.sh
sudo apt-get install nodejs
```
PPA를 통해 Node.js를 설치하면 nodejs 뿐만 아니라 npm까지 같이 설치되므로 따로 npm을 설치할 필요가 없다. 하지만 npm이 제대로 동작하기 위해선 build-essential 패키지를 설치해야 한다.
```
sudo apt-get install build-essential
```

3. git clone

내가 배포할 코드를 git clone을 해서 가상머신으로 옮긴다.

```
git clone <git url>
```

4. 서버 유지 시키기

가상머신을 접속해서 자신의 코드가 있는 폴더로 들어가 터미널에 
```
screen -S <screen name>
```
을 입력한다.
똑같은 터미널 화면이 뜨면 노드를 실행시키고 ctrl + a + d를 누른다.
터미널을 exit하고 나가도 내가 올린 서버에 접속할 수 있게 된다.

출처: https://itstory.tk/entry/Ubuntu-1604-nodejs-와-npm-설치 [덕's IT Story]