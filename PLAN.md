# User Stories / Job Stories

## Story 1 | Change name
As a user 
I want to change my name
So that I can have different nicknames when needed. 

When I change my name
I want to keep my avatar and just change the nickname
so that I can use it again

## Story 2 | Read twoots
As a user 
I want to read other people twoots
so that I can be updated with the news.

When I read the twoots
I want to be able to like, save or retwoot each twoot
so that I can interact with other users

## Story 2 | Create twoots
As a user 
I want express myself
so that I can give my opinion and people can read it. 

When I create a twoot
I want to have enough space to express a whole idea
so that I can share my opinion in a clear way

# Data Structure
```js
users = [user1, user2, ...]
user = {
    id: 0,
    firstName: '',
    lastName: '',
    nickname: ''
}

posts = [post1, post2, ...]
post = {
    id: 0,
    userId: 0,
    text: ''
}

```

# HTML Structure
- body
  - header - Header.jsx
    - h1 title
  - main - Main.jsx
    - section account - Account.jsx
      - avatar img
      - name field
      - nickname field
    - section new twoot - Twoot.jsx
      - text field
    - section all twoots - TwootList.jsx
        - div twoots

# Component Structure
- App
  - Header
  - Main (accounts, twoots)
    - Account
    - Twoots

# Data Map
User ID <> Post 

# Styling Patterns (Fonts and Colors)
Colors:
    Navbar / Button : #711a75
    Background Header : #413f42
    Background Main : #f4f1ec
    Active Icons : f73d93
    Font / Box shadow : #888888

Fonts (Google):
    Logo / Button : Permanent Marker
    Main : Kanit
