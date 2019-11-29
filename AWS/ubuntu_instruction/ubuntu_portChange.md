# SSH 포트 바꾸기

- SSH의 기본 포트는 22이고 이것을 원하는 포트로 변경할 수 있다.

1. 현재 포트 확인

인스턴스에 접속 후 현재 포트를 확인한다.
```
cat /etc/ssh/sshd_config | egrep ^\#?Port 
#Port 22
```

2. 설정 변경

sshd_config 파일을 편집한다.

```
sudo vi /etc/ssh/sshd_config
```
* i를 누르면 insert 
* ecs를 누르고 :wq!를 누르면 저장하고 파일이 닫아진다.

Port 22라는 부분 밑에 내가 원하는 포트를 적는다.
```
#Port 22
Port 1234
```
확인을 하면
```
cat /etc/ssh/sshd_config | egrep ^\#?Port
#Port 22
Port 1234
```

exit를 한다음 보안그룹에 자신이 설정한 포트를 규칙에 추가하면 설정한 포트로 접속가능하다.