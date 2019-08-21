screen 명령어
=

스크린 생성
-
```
screen -S <screen name>
```
- 만듬과 동시에 만든 screen으로 접속된다.

스크린 리스트 확인
-
```
screen -list
```
결과

```
There is a screen on:
        18811.ryujume   (08/21/19 10:40:47)     (Detached)
1 Socket in /run/screen/S-ubuntu.
```

스크린 삭제
- 
```
pkill screen
```
- 스크린이 전체 삭제된다.

결과

No Sockets found in /run/screen/S-ubuntu.

스크린 연결 해제
- 
```
screen -d <screen name>
```

결과

[remote detached from 19272.Ryujume]

세션종료
-
```
screen -X -S <screen name> kill
```
위에 스크린 목록에서 떴던 18811.ryujume를 삭제하려면

```
screen -X -S 18811 kill
```

스크린 다시 들어가기
-
```
screen -x <screen name>
```
