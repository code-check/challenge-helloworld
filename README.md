# Hello World
## 1.Try to solve "Helloworld" on codecheck
This is an Open Challenge as well as a tutorial.
You can learn how to use codecheck by taking this tutorial.

### 1-1.  Keep "Deadline" and "Time Limit" in mind.
After openinig a challenge, it is possible to see the detail page of a challenge.
On this detail page you can see the Deadline or Time limit.
Please keep in mind that you can not submit your answer after the time expired.

### 1-2. Choose a way to solve (Web Editor or GitHub)
You can solve an open challenge in our dedicated Web Editor or in GitHub.  
First of all, **let's click "Open Web Editor" button and open it.**

## 2. Solve Challenge in the Web Editor
- Please proceed to the next step from in Web Editor.

### 2-1. Select a file
Click the link below.  
[test1.js](test/test1.js)  
Please make sure the file which you clicked is opened in the editor.
You can display a specified file by clicking the link.  
And you can also select a file from the project tree on the left side of the editor.

Click
```
app/hello.js
```
in the project tree.  

[hello.js](app/hello.js)  
should show up in the editor.

### 2-2. Edit a file
Let's try to edit a file!  

Edit from
```
//return "Hello World";
```
to
```
return "Hello World";
```
by removing the comments `/`. 

### 2-3. Save files
We need to save the edited files in order to run the test code.
Click the save button after you made sure that "app/hello.js" has been checked.
Then, select "continue" button to keep editing in there.

### 2-4. Run a project
You can run an Unit test to verify that you solve the challenge correctly.
Click the "RUN" button in the middle of this editor.
It should start running a test.  
At the end, you can see the result of the test as seen below

```
codecheck: Finish 'npm install with code 0
1..2
ok 1 helloWorld Hello World!
# tests 2
# pass 1
# fail 1
codecheck: Finish with code 1
codecheck: tests  : 2
codecheck: success: 1
codecheck: failure: 1
```

It means that you have been able to solve 1 out of the 2 test in this case.

### 2-6. Solve perfectly
Currently the challenge is not solved perfectly. 
Rewrite the previous code for it to pass  
[test1.js](test/test1.js)  

If solved correctly, it should display the same as below.

```
codecheck: Finish 'npm install with code 0
1..2
ok 1 helloWorld Hello World!
# tests 2
# pass 2
# fail 0
codecheck: Finish with code 1
codecheck: tests  : 2
codecheck: success: 2
codecheck: failure: 0
```

Codecheck can support you in practicing to implement features, which satisfies the requirements while reading some test codes.

### 2-7. Confirm the edited files has been saved
Click the "save" button again after you finish editing any files.
And go back to the challenge detail page by clicking the "Back" button.

If it is saved correctly "Saved [time]" will appeared on the "Open Web Editor" button.

## 3.Solve in GitHub (For GitHub user)
### 3-1.Authenticate with GitHub
First, you need to authenticate codecheck with your GitHub account before solving a challenge in GitHub.  
Proceed to [this page](https://app.code-check.io/settings/social) and Click "connect" to authenticate your GitHub account.
![image20](images/s20.png)  

Reload this page after it is completed, you can select "Fork to GitHub" button afterwards.

### 3-2.Fork a challenge to your GitHub
Click the "Fork to GitHub" button.
![image21](images/s21.png)  
Enter the name of the repository and click the "Create" button.  
You can jump to the repository, which is generated, by clicking the link appeared on the dialog.

### 3-4. Edit answer.md
You can edit the answer, by using an editor/environment which you prefer, if you clone the repository to your localhost by using Git  

Let's edit [answer.md] as a trial.  
You can arrange originality, ingenuity and what you want to appeal by writing on [answer.md](answer.md)  
Try to answer the questions written in the comment to answer.md.

### 3-5. Save the answer
Save the repository to codecheck.  
All you have to do is push it to remote master.

Go back to the challenge detail page and check "Saved [time]".
It should be updated at the time which you submitted it at.  

### 3-6. Confirm from Web Editor
Once you have saved the answer, check the answer in the Web Editor again.  
Please try to open the Web Editor screen again. (Or reload it if you have already opened it.)  
Click [answer.md](answer.md) from the Web Editor.  
You can make sure if the answer is updated by looking if the save button became disabled.  
**Please be careful that once you start editing in GitHub, you can't edit and save the file from the web editor.**

Finally, click the RUN button.
If the result is the same as below, this means you solved the challenge correctly.

```
codecheck: Finish 'npm install with code 0
1..2
ok 1 helloWorld Hello World!
# tests 2
# pass 2
# fail 0
codecheck: Finish with code 0
codecheck: tests  : 2
codecheck: success: 2
codecheck: failure: 0
```
In this way, you can check the answer by running test codes in the web editor, even if are solving it with GitHub.


## 4. Submit challenge
### 4-1. Submit challenge
Please go back to the challenge detail page, and click the "submit" button.  
Please be careful that you couldn't edit anything afterward once you have submitted the challenge.


### 4-2. Display answer.md and Comment
Please make sure the answer.md is displayed on the page.  
You can express your developer skills with
- the project that submitted by you
- answer.md that edited by you  
in codecheck.

And you can use the comment feature to ask someone or to post supplementary information.

### 4-3. LGTM！
"LGTM" stands for `Looks Good To Me`.  
You can post LGTMs for answers submitted by others.  
Find good answers by sreaching the participants list, (click "Back to Participants")
And try to add LGTM.  
(※ We are considering new LGTM features.)
