# Software Studio 2020 Spring Midterm Project


## Topic
* Project Name : SPARK
* Key functions (add/delete)
    1. 使用者可以使用自行創建帳號或Google登入。
    2. 在Create Room頁面中，可以創建private room。
    3. 在Lobby和private room中，使用者可以透過文字聊天。
    4. 在private room中，點擊Add frineds to chat後輸入朋友的email則可開啟兩人以上的聊天室。
    5. 在My Room頁面中，使用者可以看到自己所創建的以及受邀加入的private rooms。
    6. 使用者在Lobby更新頁面時，若於private room有收到訊息，會收到chrome notifaction顯示你於該間room有新訊息。
    7. 首頁有風景圖輪播。
    
* Other functions (add/delete)
    1. 在My Account頁面，使用者可以更新自己所要使用的nickname。
    2. 除了文字，也可以透過點選貼圖聊天，兩種方式皆會顯示送出時間。

## Basic Components
|Component|Score|Y/N|
|:-:|:-:|:-:|
|Membership Mechanism|15%|Y|
|Firebase Page|5%|Y|
|Database|15%|Y|
|RWD|15%|Y|
|Topic Key Function|20%|Y|

## Advanced Components
|Component|Score|Y/N|
|:-:|:-:|:-:|
|Third-Party Sign In|2.5%|Y|
|Chrome Notification|5%|Y|
|Use CSS Animation|2.5%|Y|
|Security Report|5%|Y|

## Website Detail Description

# 作品網址：https://midterm-pro-dfc1b.web.app

# Components Description : 
1. Membership Mechanism : 透過firebase的auth.相關funtion，實作出自行創建以及靠Google登入共兩種方式。
2. RWD : 物件大小依照我設定的比例會提供使用著不同尺寸的介面。![](https://i.imgur.com/XQPJbMI.png)
![](https://i.imgur.com/8FDSMT6.png)

3. Chrome Notification : 在Lobby更新頁面時，若使用者在private room有收到新訊息，會啟用Chrome Notification告訴使用者他在哪間room有新訊息(如圖右下角，有小太陽圖示的那個)![](https://i.imgur.com/YXnRmlj.jpg)
4. CSS Animation : 登入頁面放入四張風景輪播(建議使用chrome，初次載入會有一點點卡因為圖檔不小)![](https://i.imgur.com/SmzayAW.jpg)
![](https://i.imgur.com/sEQbS99.jpg)
5. Database : 透過firebase存取歷史訊息、房間資訊、使用者名稱、現在正在使用的房間。![](https://i.imgur.com/5YReo7U.png)



# Other Functions Description : 
1. Change Nickname : 使用者在My Account介面可以設置新的nickname，更改後不論在Lobby或Private room聊天都會以此名字顯示(先前的發言仍然維持先前的nickname)。![](https://i.imgur.com/ILGC5fQ.jpg)
2. 貼圖與發送時間: 可以利用可愛的鸚鵡兄弟貼圖增加對話的活潑度，此外，發送任何訊息都會顯示時間（要更新頁面才會有準確時間）。![](https://i.imgur.com/p6eTRiC.png)
3. 聊天界面部分以scroll形式呈現，滑動至下層能完整看見所有訊息。

## Security Report (Optional)
尚未登入的使用者若透過網頁連結進入聊天室，可以看見模板，但並不能使用任何功能也不會看見任何訊息(包含Lobby)。![](https://i.imgur.com/3FSqUfe.png)
＾已登入之使用者所見畫面
![](https://i.imgur.com/nueIGMo.png)
＾未登入之使用者所見畫面
