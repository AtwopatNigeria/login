# login
a website page test

public_html/
│
├── index.html                ← Homepage
├── login.html                ← Login page
├── register.html             ← Registration page
├── verify.html               ← Member verification page
│
├── css/                      ← All CSS files
│   ├── style.css
│   ├── login.css
│   ├── dashboard.css
│
├── js/                       ← All JavaScript files
│   ├── main.js
│   ├── auth.js
│   ├── verify.js
│
├── images/                   ← Images and logo
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── executives/
│   └── members/
│
├── uploads/                  ← Uploaded files
│   ├── passports/
│   └── ids/
│
├── database/                 ← Database connection
│   └── connection.php
│
├── auth/                     ← Login protection
│   ├── session.php
│   └── logout.php
│
├── api/                      ← Backend processing
│   ├── login.php
│   ├── register.php
│   ├── verify.php
│   ├── update-status.php
│   ├── get-member.php
│   └── upload-photo.php
│
└── admin/                    ← Admin Dashboard
    │
    ├── dashboard.php         ← Main dashboard
    ├── members.php           ← Manage members
    ├── verification.php      ← Verify IDs/status
    ├── executives.php        ← Manage executives
    ├── announcements.php     ← Post updates/news
    ├── settings.php          ← Site settings
    ├── sidebar.php           ← Sidebar menu
    ├── header.php            ← Top navigation
    ├── footer.php            ← Footer
    └── logout.php            ← Logout admin
