(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{506:function(s,e,a){"use strict";a.r(e);var t=a(13),o=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-免密登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-免密登录"}},[s._v("#")]),s._v(" SSH 免密登录")]),s._v(" "),a("p",[s._v("You want to use Linux and OpenSSH to automate your tasks. Therefore you need an "),a("strong",[s._v("automatic")]),s._v(" login from host A / user a to Host B / user b. You don't want to enter any passwords, because you want to call "),a("code",[s._v("ssh")]),s._v(" from a within a shell script.")]),s._v(" "),a("h2",{attrs:{id:"how-to-do-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-do-it"}},[s._v("#")]),s._v(" How to do it")]),s._v(" "),a("p",[s._v("First log in on A as user a and generate a pair of authentication keys. Do not enter a passphrase:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a@A:~> ssh-keygen -t rsa\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/home/a/.ssh/id_rsa): \nCreated directory '/home/a/.ssh'.\nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /home/a/.ssh/id_rsa.\nYour public key has been saved in /home/a/.ssh/id_rsa.pub.\nThe key fingerprint is:\n3e:4f:05:79:3a:9f:96:7c:3b:ad:e9:58:37:bc:37:e4 a@A\n")])])]),a("p",[s._v("Now use "),a("code",[s._v("ssh")]),s._v(" to create a directory "),a("code",[s._v("~/.ssh")]),s._v(" as user b on B. (The directory may already exist, which is fine):")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a@A:~> ssh b@B mkdir -p .ssh\nb@B's password: \n")])])]),a("p",[s._v("Finally append a's new public key to "),a("code",[s._v("b@B:.ssh/authorized_keys")]),s._v(" and enter b's password one last time:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a@A:~> cat .ssh/id_rsa.pub | ssh b@B 'cat >> .ssh/authorized_keys'\nb@B's password: \n")])])]),a("p",[s._v("From now on you can log into B as b from A as a without password:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a@A:~> ssh b@B\n")])])]),a("p",[s._v("对于普通用户，需要进行以下步骤，第一步不是必须的。")]),s._v(" "),a("p",[a("strong",[s._v("A note")]),s._v(" from one of our readers: Depending on your version of SSH you might also have to do the following changes:")]),s._v(" "),a("ul",[a("li",[s._v("Put the public key in "),a("code",[s._v(".ssh/authorized_keys2")])]),s._v(" "),a("li",[s._v("Change the permissions of "),a("code",[s._v(".ssh")]),s._v(" to "),a("code",[s._v("700")])]),s._v(" "),a("li",[s._v("Change the permissions of "),a("code",[s._v(".ssh/authorized_keys2")]),s._v(" to "),a("code",[s._v("640")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);