// Array of all the audio clips and track info used for the game. The data comes from Spotify's API
var songs = [{"order_no": 0, "artist_name": "Bolt Thrower", "song_title": "Eternal War", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/7fa9dd0dfe61a5e90f02414e1948d5cf54421560?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 1, "artist_name": "Bolt Thrower", "song_title": "Through the Eye of Terror", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/ec257becda9f09e8f6142158722a1276929788d2?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 2, "artist_name": "Bolt Thrower", "song_title": "Dark Millennium", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/d20e15aa28514fdfd5b19b415c74152878442583?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 3, "artist_name": "Bolt Thrower", "song_title": "All That Remains", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/ed267d635cff99f06795916d8649e0d413003c49?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 4, "artist_name": "Bolt Thrower", "song_title": "Lost Souls Domain", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/6c53d4e74713b0751fa12a0fcc0c03f9cb78d444?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 5, "artist_name": "Bolt Thrower", "song_title": "Plague Bearer", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/b8aff56d1bf2a28283c4e6b83b7219040974964a?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 6, "artist_name": "Bolt Thrower", "song_title": "World Eater", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/93bd1a73770c9b5515137e5c6bdca622b43af53b?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 7, "artist_name": "Bolt Thrower", "song_title": "Drowned in Torment", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/c61c2a0c262ed83cdc6282c57ad0dc3b44c85954?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 8, "artist_name": "Bolt Thrower", "song_title": "Realm of Chaos", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/540b66b51783c87874953bdefacdf8ce49c42d15?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 9, "artist_name": "Bolt Thrower", "song_title": "Prophet of Hatred", "album_title": "Realm of Chaos", "cover_img": "https://i.scdn.co/image/ab67616d0000485102965c5789672688107c1a01", "preview_audio": "https://p.scdn.co/mp3-preview/dab6a7c8d9321dba017a4857f78414c8201a45b4?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 10, "artist_name": "Bolt Thrower", "song_title": "Intro - Unleashed (Upon Mankind)", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/5d6755b72395c636ea5da285128eee79384b81bf?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 11, "artist_name": "Bolt Thrower", "song_title": "What Dwells Within", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/32fbadbbe1e77353c5e0458ba2788c6d9cb75032?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 12, "artist_name": "Bolt Thrower", "song_title": "The Shreds Of Sanity", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/b12fea5aa0d554ed35b73f55ac831041c55f604d?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 13, "artist_name": "Bolt Thrower", "song_title": "Profane Creation", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/dd7c4650fa059a49af48ef9e0a23870f127603ac?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 14, "artist_name": "Bolt Thrower", "song_title": "Destructive Infinity", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/e20f74050ba1aba77f687a16e8ac3be9785e2ce1?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 15, "artist_name": "Bolt Thrower", "song_title": "Final Revelation", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/6142afee45e8c4802f175b0eabe36c3468344a7e?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 16, "artist_name": "Bolt Thrower", "song_title": "Cenotaph", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/cb29a1245954913d5edd3ca28bb634b5374ad067?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 17, "artist_name": "Bolt Thrower", "song_title": "War Master", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/8971f8e867dade5ede50574215f5adc2651be3d5?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 18, "artist_name": "Bolt Thrower", "song_title": "Rebirth Of Humanity", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/ce6627a6013634d05cd0cbc1593155a6ec5b9a60?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 19, "artist_name": "Bolt Thrower", "song_title": "Afterlife", "album_title": "War Master", "cover_img": "https://i.scdn.co/image/ab67616d00004851fd2a11ce01f078e67ec57306", "preview_audio": "https://p.scdn.co/mp3-preview/d4c7077895900c59fd8d4746d4472d22926c40a1?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 20, "artist_name": "Bolt Thrower", "song_title": "The IVth Crusade", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/68c36616ce659fb7fed882b2f05ca44d49bcb359?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 21, "artist_name": "Bolt Thrower", "song_title": "Icon", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/5cf8c397e3032de23c6706a163da93f02a0ba36c?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 22, "artist_name": "Bolt Thrower", "song_title": "Embers", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/9b02e6030e08b252b46d9a8e360bba543753729a?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 23, "artist_name": "Bolt Thrower", "song_title": "Where Next to Conquer", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/af6c7774e1273da65b9d891e7e23df5c2a984440?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 24, "artist_name": "Bolt Thrower", "song_title": "As the World Burns", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/172d7fecacc41eb336eaf1e86c25a15a177ce6a5?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 25, "artist_name": "Bolt Thrower", "song_title": "This Time It's War", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/7bb72978007411dc7d8caa8acc5f0bf294dbbc45?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 26, "artist_name": "Bolt Thrower", "song_title": "Ritual", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/9a6233ad9d8f90714ff6224b406f94cd9793e95c?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 27, "artist_name": "Bolt Thrower", "song_title": "Spearhead", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/4108c5e093ffd17218cae73febba845bfe71fe4e?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 28, "artist_name": "Bolt Thrower", "song_title": "Celestial Sanctuary", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/24b3359e7ec575fd33f82f1dd8b8d1afa515ae98?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 29, "artist_name": "Bolt Thrower", "song_title": "Dying Creed", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/34d6aa674d3dc56f13f6554b02188768289ba0a5?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 30, "artist_name": "Bolt Thrower", "song_title": "Through the Ages (Outro)", "album_title": "The IVth Crusade", "cover_img": "https://i.scdn.co/image/ab67616d00004851f3c0ed344a9ea8975d001ad2", "preview_audio": "https://p.scdn.co/mp3-preview/06683fd7455fbe8b93c05471b5b6a903d7e3bac9?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 31, "artist_name": "Bolt Thrower", "song_title": "War", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/71bee9bdb533228302f9824f8efcee26e24bfeb1?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 32, "artist_name": "Bolt Thrower", "song_title": "Remembrance", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/27aa05147d775ce32784f18e54038a7a6c0a20cd?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 33, "artist_name": "Bolt Thrower", "song_title": "When Glory Beckons", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/2c56dcaabb23d4c2ebfef725c7ffa45be202f1e1?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 34, "artist_name": "Bolt Thrower", "song_title": "For Victory", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/8ac7e6a801aa26c9b2b850d20412495fc01e0d40?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 35, "artist_name": "Bolt Thrower", "song_title": "Graven Image", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/d41bba0e01b5d3ac69c7df919f33c0111d0a2979?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 36, "artist_name": "Bolt Thrower", "song_title": "Lest We Forget", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/2ef3c667f738c3a266db05a45921aabce3d1d27d?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 37, "artist_name": "Bolt Thrower", "song_title": "Silent Demise", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/ffd5e710f4cb27bd5b4792959163965744aaeaf5?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 38, "artist_name": "Bolt Thrower", "song_title": "Forever Fallen", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/a204e4539f321073efb9d717a093896f9259371a?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 39, "artist_name": "Bolt Thrower", "song_title": "Tank Mk I", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/1169c4bdb7f40e9b6c5c8910e76612192d8e1d9d?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 40, "artist_name": "Bolt Thrower", "song_title": "Armageddon Bound", "album_title": "For Victory", "cover_img": "https://i.scdn.co/image/ab67616d000048511a1858cddc9e9a484c0048b4", "preview_audio": "https://p.scdn.co/mp3-preview/4e496a12cffaa1e367fa2463c1506e51fbcb8dd0?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 41, "artist_name": "Bolt Thrower", "song_title": "Zeroed", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/0b2023f0ce633d60f3500bdb49e198a7f68d8a5b?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 42, "artist_name": "Bolt Thrower", "song_title": "Laid to Waste", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/ad234114b44f0ea78c7f89a439582c36ef2f4d3b?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 43, "artist_name": "Bolt Thrower", "song_title": "Return From Chaos", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/4072682bdecf47bd591ffaff1590d0458343b972?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 44, "artist_name": "Bolt Thrower", "song_title": "Mercenary", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/4756ee0e71a0ace3933183ff98bd82ba1cda4479?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 45, "artist_name": "Bolt Thrower", "song_title": "To the Last...", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/46661e571687e435d17887d68c4dbb50d63c21a0?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 46, "artist_name": "Bolt Thrower", "song_title": "Powder Burns", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/73ea6b963c3c6d08a1a941048281a03d046451fb?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 47, "artist_name": "Bolt Thrower", "song_title": "Behind Enemy Lines", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/8484b769819a57cd8be80e5003435e69dbc4ad6d?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 48, "artist_name": "Bolt Thrower", "song_title": "No Guts, No Glory", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/76a542184869134f5f3bf76b81d533c733ab11d5?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 49, "artist_name": "Bolt Thrower", "song_title": "Sixth Chapter", "album_title": "Mercenary", "cover_img": "https://i.scdn.co/image/ab67616d00004851c8cbe984b53a000f75c3cc96", "preview_audio": "https://p.scdn.co/mp3-preview/40bd64db9dbb010961298e1d373c5b5ae9ceac0b?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 50, "artist_name": "Bolt Thrower", "song_title": "Contact- Wait Out", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/f1e9a52c56d77b7f0218e26b7f4dfee42e6a02f9?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 51, "artist_name": "Bolt Thrower", "song_title": "Inside the Wire", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/898d201c1ce610bcfb81cd120c7ec09331a8ad41?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 52, "artist_name": "Bolt Thrower", "song_title": "Honour", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/dcc58eccef3a8fc4969ec99814d8028ce007f1ad?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 53, "artist_name": "Bolt Thrower", "song_title": "Suspect Hostile", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/adb8b0d746607acf2fbdd788d90cfbb11306f952?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 54, "artist_name": "Bolt Thrower", "song_title": "7th Offensive", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/f8f7eed255d6f5a676048d0deddcefcd68b72325?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 55, "artist_name": "Bolt Thrower", "song_title": "Valour", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/baa5d5eeb49d90a47ef013412e554081e4c296ec?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 56, "artist_name": "Bolt Thrower", "song_title": "K-Machine", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/ee3053402e8b25892bde29f0b66bce6ee847081f?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 57, "artist_name": "Bolt Thrower", "song_title": "A Hollow Truce", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/9348006ec165673493d3e7d82fdb7889eb2506d8?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 58, "artist_name": "Bolt Thrower", "song_title": "Pride", "album_title": "Honour Valour Pride", "cover_img": "https://i.scdn.co/image/ab67616d000048519ca1c407b91f61f13c8c55bd", "preview_audio": "https://p.scdn.co/mp3-preview/dd0f7b8ab540b6b8ae88ac61f601194960fe5fc1?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 59, "artist_name": "Bolt Thrower", "song_title": "At First Light", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/7c6b1b79d78788b8940be2d19c86c2c7f89c6491?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 60, "artist_name": "Bolt Thrower", "song_title": "Entrenched", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/f39f648a422e9ec25bbf8d5bbe2a61f6de42eda1?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 61, "artist_name": "Bolt Thrower", "song_title": "The Killchain", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/06b2cb7764133d247c0ed7058fb14262cb29514e?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 62, "artist_name": "Bolt Thrower", "song_title": "Granite Wall", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/c7910f239be5b9c0bfe501e6496d8944ef7826c2?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 63, "artist_name": "Bolt Thrower", "song_title": "Those Once Loyal", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/f89033c6b6ac98f61355a73cd42a8f46ba415134?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 64, "artist_name": "Bolt Thrower", "song_title": "Anti-Tank (Dead Armour)", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/518232ad05eae7e127dc36d4ad4b1297da4dff1e?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 65, "artist_name": "Bolt Thrower", "song_title": "Last Stand Of Humanity", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/192384bde8c4ce9d6eacefc264a25fb943131812?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 66, "artist_name": "Bolt Thrower", "song_title": "Salvo", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/3730ede46954027fa98637c6830acd424d68b02f?cid=60eb75702f744003a4bf1d1687be6f5e"}, {"order_no": 67, "artist_name": "Bolt Thrower", "song_title": "When Cannons Fade", "album_title": "Those Once Loyal", "cover_img": "https://i.scdn.co/image/ab67616d00004851a68dc12460e368f6389541a8", "preview_audio": "https://p.scdn.co/mp3-preview/0d763ae2136672c2b99d92c1585055d36363fcff?cid=60eb75702f744003a4bf1d1687be6f5e"}];
// Additional audio files for the game.
var boom = new Audio('sources/boom.mp3'), countdown = new Audio('sources/countdown.mp3');
// Rest of the variables used within this program
var time = NaN;
var clicks = 0;
var gameOn = false;
var prevDraw = null;
var audio_clip, text1, text2;
var timer, score, scoreboard, start;
var answer1, answer2, answer3, black_box;
var randVar, randSong1, randSong2, randSong3;
var instructs1, instructs2, instructs3, instructs4, instructs5;


// The function which is called via html
function loadGame() {
	start = new component(300, 100, "black", 50, 390, "start", null, "BEGIN", "", null);
	black_box = new component(300, 220, "black", 50, 136, "black", null, "", "", null);
	instructs1 = new component("29px", "IM Fell English", "white", 82, 190, "text");
	instructs1.text = "AIM:";
	instructs2 = new component("21px", "IM Fell English", "white", 80, 233, "text");
	instructs2.text = "Turn up your volume and";
	instructs3 = new component("21px", "IM Fell English", "white", 80, 258, "text");
	instructs3.text = "match as many audio clips";
	instructs4 = new component("21px", "IM Fell English", "white", 80, 283, "text");
	instructs4.text = "with the correct song titles";
	instructs5 = new component("21px", "IM Fell English", "white", 80, 308, "text");
	instructs5.text = "in 60 seconds.";
	GameArea.start();
}


// Initialization of canvas
var GameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 525;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
        this.interval = setInterval(startScreen, 20); //each frame of the game is 20 ms
        },
	clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}


// Building function for any component of the game
function component(width, height, color, x, y, type, pic_url, name, album, audio) {
	this.type = type;
	if (type == "answer" || type == "incorrect" || type == "correct") {
		this.image = new Image();
		this.image.src = pic_url;
	}
    this.width = width;
    this.height = height;   
    this.x = x;
    this.y = y;
	if (audio != null) {
		this.correct = true;
		audio_clip = new song(audio, album, name);
	} else {
		this.correct = false;
	}
	
    this.update = function() {
        ctx = GameArea.context;
        if (this.type == "text") { //Formatting for the texts
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
		} else if (this.type == "start") { //Formatting for the red boxes that start the game
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = 'rgba(137, 55, 51, 0.75)';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000'; 
			ctx.stroke();
			ctx.closePath();
			ctx.font = '32pt IM Fell English';
			ctx.fillStyle = color;
			ctx.fillText(name, this.x + 77, this.y + 64);
		} else if (this.type == "black") { //Formatting for the black boxes
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = 'rgba(0, 0, 0, 0.60)';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#999999'; 
			ctx.stroke();
			ctx.closePath();
		} else if (this.type == "incorrect") { //Formatting for the incorrect answer box
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = 'rgba(137, 55, 51, 0.75)';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000'; 
			ctx.stroke();
			ctx.closePath();
			ctx.font = '14pt Times';
			ctx.fillStyle = '#000000';
			ctx.fillText(name, this.x + 100, this.y + 45);
			ctx.font = '13pt Times';
			ctx.fillStyle = color;
			ctx.fillText("  " + album, this.x + 100, this.y + 75);
			ctx.drawImage(this.image, this.x + 20, this.y + 20);
		} else if (this.type == "correct") { //Formatting for the correct answer box
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = 'rgba(91, 127, 55, 0.75)';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000'; 
			ctx.stroke();
			ctx.closePath();
			ctx.font = '14pt Times';
			ctx.fillStyle = '#000000';
			ctx.fillText(name, this.x + 100, this.y + 45);
			ctx.font = '13pt Times';
			ctx.fillStyle = color;
			ctx.fillText("  " + album, this.x + 100, this.y + 75);
			ctx.drawImage(this.image, this.x + 20, this.y + 20);
		} else { //Formatting for the regular answer boxes
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = 'rgba(200, 200, 200, 0.75)';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000'; 
			ctx.stroke();
			ctx.closePath();
			ctx.font = '14pt Times';
			ctx.fillStyle = '#000000';
			ctx.fillText(name, this.x + 100, this.y + 45);
			ctx.font = '13pt Times';
			ctx.fillStyle = color;
			ctx.fillText("  " + album, this.x + 100, this.y + 75);
			ctx.drawImage(this.image, this.x + 20, this.y + 20);
		}
	}
}


// Custom commands for the audio clips
function song(src, album, song) {
    this.song = document.getElementById("song");
    this.song.src = src;
	
	//More specific manual volume control 
	//attempting to have all songs palyed at the same intensity
	if (song == "The IVth Crusade") {
		this.song.volume = 0.6;
	} else if (album == "The IVth Crusade") {
		this.song.volume = 1;
	} else if (song == "Profane Creation") {
		this.song.volume = 1;
	} else if (album == "War Master") {
		this.song.volume = 0.70;
	} else if (album == "Realm of Chaos") {
		this.song.volume = 0.5;
	} else {
		this.song.volume = 0.35;
	}

	this.play = function(){
        this.song.play();
    }
    this.stop = function(){
        this.song.pause();
    }    
}


// Position finding clicks within the canvas
function mousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
function isInside(pos, rect){
	return pos.x > rect.x && pos.y > rect.y && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height;
}


// Everything that happens after a click within the canvas
GameArea.canvas.addEventListener('click', function(evt) {
	clicks++;
	var pos = mousePos(GameArea.canvas, evt);
	if (isInside(pos, start) && gameOn == false && isNaN(time)) {
		GameArea.stop(); //interval is cleared
		timer = new component("60px", "Times", "white", 185, 270, "text");
		black_box = new component(140, 98, "black", 130, 202, "black", null, "", "", null);
		GameArea.interval = setInterval(preStart, 20); //interval needs to be set again

	} else if (isInside(pos, answer1) && gameOn == true) {
		if (answer1.correct) {
			gameOn = !gameOn;
			if (answer2.type == "answer" && answer3.type == "answer") {score+=2;} else {score++;} // Score is given. 2 points for answering correctly on first try and 1 point for correct answer on second guess
			answer1 = new component(360, 100, "black", 20, 130, "correct", songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, null);
			setTimeout(function(){songDraw(); gameOn = !gameOn;}, 700);
		} else {
			answer1 = new component(360, 100, "black", 20, 130, "incorrect", songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, null);
			if (answer2.type == "incorrect") {
				gameOn = !gameOn;
				//score--;
				answer3 = new component(360, 100, "black", 20, 350, "correct", songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, null);
				setTimeout(function(){songDraw(); gameOn = !gameOn;}, 1500);
			}
			else if (answer3.type == "incorrect") {
				gameOn = !gameOn;
				//score--;
				answer2 = new component(360, 100, "black", 20, 240, "correct", songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, null);
				setTimeout(function(){songDraw(); gameOn = !gameOn;}, 1500);
			}
		}
		
    } else if (isInside(pos, answer2) && gameOn == true) {
		if (answer2.correct) {
			gameOn = !gameOn;
			if (answer1.type == "answer" && answer3.type == "answer") {score+=2;} else {score++;} // Score is given. 2 points for answering correctly on first try and 1 point for correct answer on second guess
			answer2 = new component(360, 100, "black", 20, 240, "correct", songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, null);
			setTimeout(function(){songDraw(); gameOn = !gameOn;}, 700);
		} else {
			answer2 = new component(360, 100, "black", 20, 240, "incorrect", songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, null);
			if (answer1.type == "incorrect") {
				gameOn = !gameOn;
				//score--;
				answer3 = new component(360, 100, "black", 20, 350, "correct", songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, null);
				setTimeout(function(){songDraw(); gameOn = !gameOn;}, 1500);
			}
			else if (answer3.type == "incorrect") {
				gameOn = !gameOn;
				//score--;
				answer1 = new component(360, 100, "black", 20, 130, "correct", songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, null);
				setTimeout(function(){songDraw(); gameOn = !gameOn;}, 1500);
			}
		}
		
    } else if (isInside(pos, answer3) && gameOn == true) {
		if (answer3.correct) { 
			gameOn = !gameOn;
			if (answer1.type == "answer" && answer2.type == "answer") {score+=2;} else {score++;} // Score is given. 2 points for answering correctly on first try and 1 point for correct answer on second guess
			answer3 = new component(360, 100, "black", 20, 350, "correct", songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, null);
			setTimeout(function(){songDraw(); gameOn = !gameOn;}, 700);
		} else {
			answer3 = new component(360, 100, "black", 20, 350, "incorrect", songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, null);
			if (answer1.type == "incorrect") {
				gameOn = !gameOn;
				//score--;
				answer2 = new component(360, 100, "black", 20, 240, "correct", songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, null);
				setTimeout(function(){songDraw(); gameOn = !gameOn;}, 1500);
			}
			else if (answer2.type == "incorrect") {
				gameOn = !gameOn;
				//score--;
				answer1 = new component(360, 100, "black", 20, 130, "correct", songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, null);
				setTimeout(function(){songDraw(); gameOn = !gameOn;}, 1500);
			}
		}
    }
}, false);


// Looping function for the start screen
function startScreen() {
	GameArea.clear(); 	//The canvas is cleared after each frame 
	start.update();		//before components are loaded back onto it
	black_box.update();
	instructs1.update();
	instructs2.update();
	instructs3.update();
	instructs4.update();
	instructs5.update();
}


// Looping function for the countdown right before the game starts
function preStart () {
	countdown.play();
	GameArea.clear();
	GameArea.frameNo += 1;
	time = Math.round((175 - GameArea.frameNo)/50);
	timer.text = time;
	black_box.update();
	timer.update();
	if (time == 0) {
		GameArea.stop();
		GameArea.clear();
		text1 = new component("60px", "IM Fell English", "white", 144, 271, "text");
		text1.text = "GO!";
		black_box.update();
		text1.update();
		boom.play();
		score = 0;
		GameArea.frameNo = 0;
		clicks = 0;
		gameOn = !gameOn;
		startGame();
		setTimeout(function(){GameArea.interval = setInterval(gamePlayCycle, 20);}, 1000);
	}
}


// Setup for a start of the game
function startGame() {
	timer = new component("34px", "Times", "white", 22, 500, "text");
	scoreboard = new component("33px", "Times", "white", 203, 500, "text");
	black_box = new component(370, 55, "black", 15, 461, "black", null, "", "", null);
	songDraw();
}


// Randomly generated set of songs for each question
function songDraw() {
	//Same songs cannot be randomly drawn
	do {
		randSong1 =  Math.floor(Math.random() * songs.length);
	} while (randSong1 == prevDraw)
	do {
		randSong2 =  Math.floor(Math.random() * songs.length);
	} while (randSong2 == randSong1 || randSong2 == prevDraw)
	do {
		randSong3 =  Math.floor(Math.random() * songs.length);
	} while (randSong3 == randSong1 || randSong3 == randSong2 || randSong3 == prevDraw)
	
	//The position of the correct answer is also randomly generated
	randVar = Math.floor((Math.random() * 3) + 1);
	if (randVar == 1) {
		answer1 = new component(360, 100, "black", 20, 130, "answer", 
		songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, songs[randSong1].preview_audio); //If the answer components final parameter (audio) is not null, it is determined as correct
		prevDraw = randSong1;
		answer2 = new component(360, 100, "black", 20, 240, "answer", 
		songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, null); //If the answer components final parameter (audio) is null, it is determined as not correct
		answer3 = new component(360, 100, "black", 20, 350, "answer", 
		songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, null);
	}
	else if (randVar == 2) {
		answer1 = new component(360, 100, "black", 20, 130, "answer", 
		songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, null);
		answer2 = new component(360, 100, "black", 20, 240, "answer", 
		songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, songs[randSong2].preview_audio);
		prevDraw = randSong2;
		answer3 = new component(360, 100, "black", 20, 350, "answer", 
		songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, null);
	}
	else if (randVar == 3) {
		answer1 = new component(360, 100, "black", 20, 130, "answer", 
		songs[randSong1].cover_img, songs[randSong1].song_title, songs[randSong1].album_title, null);
		answer2 = new component(360, 100, "black", 20, 240, "answer", 
		songs[randSong2].cover_img, songs[randSong2].song_title, songs[randSong2].album_title, null);
		answer3 = new component(360, 100, "black", 20, 350, "answer", 
		songs[randSong3].cover_img, songs[randSong3].song_title, songs[randSong3].album_title, songs[randSong3].preview_audio);
		prevDraw = randSong3;
	}
	
}


// Looping function for a single run of the game
function gamePlayCycle() {
	audio_clip.play();
	GameArea.clear();
	GameArea.frameNo += 1; 								//each frame is 20 ms
	time = Math.round((3025 - GameArea.frameNo)/50); 	//time of the game is determined here
    timer.text = "TIME: " + time;
	scoreboard.text = "SCORE: " + score;
    black_box.update();
	timer.update();
	scoreboard.update();
	answer1.update();
	answer2.update();
	answer3.update();
	if (time == 3) {
		countdown.play();
	}
	if (time == 0 || clicks == 100) { //When time runs out or someone spams the canvas too much, the game ends
		GameArea.stop();
		boom.play();
		gameOn = !gameOn;
		scoreboard = new component("58px", "Times", "white", 170, 346, "text");
		text1 = new component("58px", "IM Fell English", "white", 52, 200, "text");
		text2 = new component("46px", "IM Fell English", "white", 84, 282, "text");
		black_box = new component(344, 250, "black", 28, 125, "black", null, "", "", null);
		start = new component(344, 100, "black", 28, 390, "start", null, "RETRY \u21ba", "", null);
		GameArea.frameNo = 0;
		GameArea.interval = setInterval(endScreen, 20);
	}
}


// Screen after a game is over
function endScreen() {
	time = NaN;
	audio_clip.stop();
	GameArea.clear();
	text1.text = "Game Over!"
	text2.text = "Final Score:"
	if (score < 10) {
		scoreboard.text = " " + score;
	} else {
		scoreboard.text = score;
	}
	black_box.update();
	scoreboard.update();
	text1.update();
	text2.update();
	start.update();
}
