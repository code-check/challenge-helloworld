# Hello World

Welcome to codecheck!  
Let's learn how to use codecheck by taking this tutorial.  
First, click the green button to start the challenge.

## 1. Try making a "Hello World" function on codecheck

### 1-1.  Watch out for the "Deadline" and "Time Limit"!
After opening a challenge, you will see the detail page of the challenge.  
On the detail page you will see the deadline and time limit.  
Keep in mind that you cannot submit your answer after the time expires!  
![制限時間の表示](images/time_limit.png)

### 1-2. Web Editor vs GitHub
You can choose to solve the challenge in either our dedicated Web Editor,  
or in your local environment via our Fork to Github feature.  
**First off, try clicking the "Open Web Editor" button located on the right side of the screen.**  
!["Webエディタで開く"ボタン](images/open_challenge_buttons.png)

---

## 2. Solving in the Web Editor

### 2-1. Open Files
After the web editor finishes loading, click the below link in the web editor.  
[basic.js](test/basic.js)  
Make sure the file you clicked is open in the editor.
You can open specified files by clicking on their link or you can open a file from the project tree on the left menu of the editor.

### 2-2. Confirm the requirements
In any challenge, the requirements of the challenge will be  introduced like this in the README:

```
The Mission:
Create a function where
When any string [text] is passed,
it would return "Hello [text]!"
```

### 2-3. Edit Files
Let's now try editing files in the web editor.
Open [answer.md](answer.md) and write your favorite programming language in the section titled `## Q1. Favorite Programming Language`.

![answer.mdの編集](images/favorite_programming_lang.png)

### 2-4. Save Files
Click the "Save" button after you have finish editing.

![save_files_modal](images/save_files_modal.png)

Click "Continue" in the pop-up to continue editing in the editor.

### 2-5. Executing Tests
You can run a unit test to verify that you have solved the challenge correctly.  
Click the "RUN" button in the middle of the editor to start running the test.
You should see the result of the test displayed on the console.

For example:
```
== Test outputs ==========
1..3
argv[0]: World
not ok 1 CLI App outputs 'Hello World!' when given 'World' as an argument
argv[0]: codecheck
not ok 2 CLI App outputs 'Hello codecheck!' when given 'codecheck' as an argument.
argv[0]: 織田信長
not ok 3 CLI App outputs 'Hello 織田信長!' when given '織田信長' as an argument.

# tests 3
# pass 0
# fail 3
== Test result ==========
Exit code: 3
Number of test cases: 3
Passed: 0
Failed: 3
```

In the above case, you have been able to solve 0 out of the 3 tests.

### 2-6. Solve the Challenge
Currently the challenge is not solved.  
Try to implement a function that would meet the requirements mentioned earlier in `The Mission`. Feel free to refer to the tests in [basic.js](test/basic.js).

Build the solution as a CLI application that processes command line arguments and returns the expected output to `stdout`.  
See [YOUR_LANGUAGE].md for details on how to build a CLI application.

![CLIの実際方法の記載場所](images/cli_instructions.png)

If solved correctly, running the project should display the result as shown below:

```
== Test outputs ==========
1..3
Hello World!
ok 1 CLI App outputs 'Hello World!' when given 'World' as an argument
Hello codecheck!
ok 2 CLI App outputs 'Hello codecheck!' when given 'codecheck' as an argument.
Hello 織田信長!
ok 3 CLI App outputs 'Hello 織田信長!' when given '織田信長' as an argument.
# tests 3
# pass 3
# fail 0
== Test result ==========
Exit code: 0
Number of test cases: 3
Passed: 3
Failed: 0
```

### 2-7. Save Frequently
**Please save frequently** while solving.
If you do not save when working on your code,  
your changes may be lost and will not be scored.  
![Saveボタン](images/save-button.png)

---

## 3.Solve in GitHub (For GitHub users)
### 3-1. Authenticate with GitHub
To begin, you need to authenticate codecheck with your GitHub account before solving a challenge in GitHub.  
Proceed to [this page](https://app.code-check.io/settings/social) and click "Connect" to authenticate your GitHub account.

![ソーシャルアカウントの連携画面](images/github_integration_2.png)

Reload the challenge page after it is completed.
Now you can select "Fork to GitHub".

### 3-2. Fork to GitHub
Click the "Fork to GitHub" button.  

![チャレンジのフォーク画面](images/fork_repo_modal_empty.png)

Enter the name of the repository and click "Create".
You can jump to the repository by clicking the link that appears on the dialog.

![レポジトリの作成に成功しました](images/fork_repo_modal_success.png)

### 3-3. Edit answer.md
Clone the repository to your localhost by using Git to edit your solution using your preferred editor/environment.

Try editing [answer.md](answer.md).

### 3-4. Save your answer
Save your repository to codecheck by pushing it to remote master (`git push origin master`).

Go back to the challenge detail page and check "Saved [time]".
It should be updated with the submitted time.

![保存の確認](images/confirm_saved_2.png)

### 3-5. Confirm in Web Editor
Once you have saved your answer, open the Web Editor to check if it has been properly saved.
Open [answer.md](answer.md) from the Web Editor.  
Confirm that the answer is updated by checking to see if the "Save" button becomes disabled.  
**Keep in mind that once you start editing in GitHub, you can't edit and save the file from the Web Editor.**

Click the "RUN" button.
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

In this way, you can check whether your answer is actually passing tests in the official codecheck environment, while solving the challenge locally.

## 4. Submit Challenge
### 4-1. Display answer.md and Comment
In [answer.md](answer.md) write a brief explanation about:

- How your code works
- Problems faced while solving the challenge
- How you solved those problems

The contents of this file will be displayed to the organization that you are taking the exam for, and is a great opportunity to explain and express yourself.

### 4-2. Submit challenge
Please be warned that you can no longer edit the files once you have submitted the challenge.  
When you are ready, go back to the challenge detail page and click the "Submit" button.  

---

## 5. Notes
### About Environment Variables

We recommend that you **do not save sensitive information directly to github or the web editor.** This includes variables such as authentication tokens and API keys, which should never be made public.  

We instead recommend you to use codecheck's Environment Variables feature.  
With this feature, you can add and use variables in your codecheck challenges without making them visible to anyone else.

1. On the exam page, there is a dropdown menu to the right of each challenge name:  
  ![exam_challenge_list_masked_sm](https://user-images.githubusercontent.com/7766684/31326767-4145f402-ad05-11e7-8f38-fc55913a2776.png)

2. Open the dropdown menu, and select "Set Env Vars".  
 ![triangle_dropdown](https://user-images.githubusercontent.com/7766684/31326777-49570ec4-ad05-11e7-914c-d61b245109dd.png)

3. Input an environment variable.  
 ![env_modal_sm](https://user-images.githubusercontent.com/7766684/31326778-4b594944-ad05-11e7-949d-b96019e7bc87.png)
