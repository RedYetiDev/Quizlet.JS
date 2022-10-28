# Quizlet.JS
> ## Version 3.0

> Stable NPM:<br/>[![NPM](https://img.shields.io/npm/v/quizlet.js?color=4f12d7&logo=npm&style=for-the-badge&label=Version)](https://npmjs.com/package/quizlet.js)<br/>

> Stable GitHub:<br/>[![GitHub release](https://img.shields.io/github/v/release/redyetidev/quizlet.js?label=version&color=4f12d7&logo=github&style=for-the-badge)](https://github.com/redyetidev/quizlet.js/releases)<br/>


## Installing
This package can be installed using NodeJS's package manager, `npm`.
```
npm install quizlet.js
```

<details>
    <summary>
    
## **Importing**    
</summary>

> To use the new *ESM* syntax, set your `type` to `module` in your `package.json`. [**Click me**](https://nodejs.org/api/packages.html#packages_package_json_and_file_extensions) for more information
- You can import the entire package into a single variable (***esm***)
    ```js
    import * as Quizlet from 'quizlet.js'
    ```

- You can import certain parts of the package into different variables (***esm***)
    ```js
    import {Class, StudySet, User, Live, Folder} from 'quizlet.js'
    ```
- You can also import this package into non-esm modules (***commonjs***)
    ```js
    var Quizlet = await import("quizlet.js")
    ```

</details>

<details>
    <summary>

## **Features**
</summary>

- ## StudySet (`Quizlet.StudySet`)
    One of the main things about Quizlet is the unique study sets. This class allows you to access these sets 
    - ### **Methods**
        <table><thead><tr><th>Type</th><th>Method</th><th>Parameters</th><th>Returns</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>

        `static`</td><td>`getByID`</td><td>
        | Parameter | Type              | Default  | Description |
        |-----------|-------------------|----------|-------------|
        | `id`      | `string` `number` | Required | The Set ID  |
        </td><td>
        
        `Promise<StudySet>`</td><td>Gets a study set via it's ID</td><td>
        ```js
        await StudySet.getByID("123456")
        ```
        </td></tr><tr><td>

        `static`</td><td>`getFromUser`</td><td>
        | Parameter | Type              | Default  | Description |
        |-----------|-------------------|----------|-------------|
        | `id`      | `string` `number` | Required | The User ID  |
        </td><td>`Promise<StudySet[]>`</td><td>Gets all the sets that a user has created</td><td>
        ```js
        await StudySet.getFromUser("123456")
        ```
        </td></tr><tr><td>

        `static`</td><td>`getFromClass`</td><td>
        | Parameter | Type              | Default  | Description |
        |-----------|-------------------|----------|-------------|
        | `id`      | `string` `number` | Required | The Class ID  |
        </td><td>
        
        `Promise<StudySet[]>`</td><td>Gets all the sets that exist within a class</td><td>
        ```js
        await StudySet.getFromClass("123456")
        ```
        </td></tr><tr><td>

        `static`</td><td>`getFromFolder`</td><td>
        | Parameter | Type              | Default  | Description |
        |-----------|-------------------|----------|-------------|
        | `id`      | `string` `number` | Required | The Folder ID  |
        </td><td>
        
        `Promise<StudySet[]>`</td><td>Gets all the sets that exist within a folder</td><td>
        ```js
        await StudySet.getFromFolder("123456")
        ```
        </td></tr><tr><td>
        
        `dynamic`</td><td>`getTerms`</td><td>None</td><td id="set-term">`Promise<Term>`:<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>`term`</td><td><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>`text`</td><td>`string`</td><td>The content's text</td></tr><tr><td>`audio`</td><td>`string`</td><td>The content's audio (Always a TTS from my testing)</td></tr></tbody></table></td><td>The term's term</td></tr><tr><td>`definition`</td><td><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>`text`</td><td>`string`</td><td>The content's text</td></tr><tr><td>`audio`</td><td>`string`</td><td>The content's audio (Always a TTS from my testing)</td></tr></tbody></table></td><td>The term's definition</td></tr><tr><td>`rank`</td><td>`number`</td><td>The term's index, or rank in the set</td></tr><tr><td>`image`</td><td>`string`</td><td>The image URL of the term.</td></tr><tr><td>`setId`</td><td>`number`</td><td>The ID of the set that this term belongs in</td></tr><tr><td>`id`</td><td>`number`</td><td>The ID of this term</td></tr></tbody></table></td><td>Gets all the terms in a study set</td><td>
        ```js
        await mySet.getTerms()
        ```
        </td></tr><tr><td>

        `dynamic`</td><td>`getCreator`</td><td>None</td><td>`Promise<User>`</td><td>Gets the creator of a study set.</td><td>
        ```js
        await mySet.getCreator()
        ```
        </td></tr></tbody></table>
    - ### **Properties**
        <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>
        
        `url`</td><td>`string`</td><td>The set URL</td></tr><tr><td>`id`</td><td>`number`</td><td>The set's ID</td></tr><tr><td>`creatorId`</td><td>`number`</td><td>The ID of the set's creator</td></tr><tr><td>`termLang`</td><td>`string`</td><td>The languages of the terms in the set</td></tr><tr><td>`defLang`</td><td>`string`</td><td>The languages of the definitions in the set</td></tr><tr><td>`title`</td><td>`string`</td><td>The set title/name</td></tr><tr><td>`description`</td><td>`string`</td><td>The set's description</td></tr><tr><td>`thumbnail`</td><td>`string`</td><td>The icon for the set</td></tr><tr><td>`numTerms`</td><td>`number`</td><td>The number of terms in this set</td></tr></tbody></table>
- ## User (`Quizlet.User`)
    The `User` class allows you to see details about users on Quizlet
    - ### **Methods**
        <table><thead><tr><th>Type</th><th>Method</th><th>Parameters</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td>
        
        `static`</td><td>`getByID`</td><td>
        | Parameter 	| Types 	|Default| Description 	|
        |---	|---	|---	|-|
        | `id` 	| `string` `number`|Required 	| The user ID 	|
        </td><td>

        `Promise<User>`</td><td>Gets a user by their ID</td></tr><tr><td>`static`</td><td>`getByEmail`</td><td>
        | Parameter 	| Types    	|Default| Description      	|
        |-----------	|----------	|-|------------------	|
        | `email`   	| `string` 	|Required| The user's email 	|
        </td><td>
        
        `Promise<User>`</td><td>Gets a user from a registered email</td></tr><tr><td>`static`</td><td>`getByUsername`</td><td>
        | Parameter  	| Types    	| Description         	|
        |------------	|----------	|---------------------	|
        | `username` 	| `string` 	| The user's username 	|
        </td><td>
        
        `Promise<User>`</td><td>Gets a user from the user's username</td></tr><tr><td>`dynamic`</td><td>`getSets`</td><td>None</td><td>`Promise<StudySet[]>`</td><td>Gets all the sets that a user has created</td></tr><tr><td>`dynamic`</td><td>`getClasses`</td><td>None</td><td>`Promise<Class[]>`</td><td>Gets all the classes that the user is a member of</td></tr><tr><td>`dynamic`</td><td>`getFolders`</td><td>None</td><td>`Promise<Folder[]>`</td><td>Gets all the folders that the user has sets in</td></tr></tbody></table>
    - ### **Properties**
        | Property 	| Types 	| Description 	|
        |---	|---	|---	|
        | `id` 	| `number` 	| The user's ID 	|
        | `username` 	| `string` 	| The user's username 	|
        | `avatar` 	| `string` 	| The URL to the user's display image 	|
        | `numClasses` 	| `number` 	| The number of classes that this user is a memberof 	|
        | `type` 	| `0` `1` `2` 	| The type of the user this is. `0` means that the user is a student.<br/>`2` means that the user is a teacher.<br/>If you find out what `1` means for the user, please let me know 	|
- ## Class (`Quizlet.Class`)
    The `Class` class allows you to access classes created within Quizlet
    - ### **Methods**
        <table><thead><tr><th>Type</th><th>Method</th><th>Parameters</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td>
        
        `static`</td><td>`getByID`</td><td>
        | Parameter 	| Types             	| Default  	| Description  	|
        |-----------	|-------------------	|----------	|--------------	|
        | `id`      	| `string` `number` 	| Required 	| The class ID 	|
        </td><td>
        
        `Promise<Class>`</td><td>Gets a class by its ID</td></tr><tr><td>`static`</td><td>`getByCode`</td><td>
        | Parameter 	| Type     	| Default  	| Description           	|
        |-----------	|----------	|----------	|-----------------------	|
        | `code`    	| `string` 	| Required 	| The class's join code 	|
        </td><td>
        
        `Promise<Class>`</td><td>Gets a class by its join code</td></tr><tr><td>`static`</td><td>`getFromSchool`</td><td>
        | Parameter 	| Types             	| Default  	| Description  	|
        |-----------	|-------------------	|----------	|--------------	|
        | `id`      	| `string` `number` 	| Required 	| The school's ID 	|
        </td><td>
        
        `Promise<Class[]>`</td><td>Gets all the classes in a school</td></tr><tr><td>`static`</td><td>`getFromUser`</td><td>
        | Parameter 	| Types             	| Default  	| Description  	|
        |-----------	|-------------------	|----------	|--------------	|
        | `id`      	| `string` `number` 	| Required 	| The user's ID 	|
        </td><td>
        
        `Promise<Class[]>`</td><td>Gets all the sets that a user has created</td></tr><tr><td>`static`</td><td>`getClasses`</td><td>None</td><td>`Promise<Class[]>`</td><td>Gets all the classes that the user is a member of</td></tr><tr><td>`dynamic`</td><td>`getMembers`</td><td>None</td><td>`Promise<User[]>`</td><td>Gets all the members of a class</td></tr><tr><td>`dynamic`</td><td>`getSets`</td><td>None</td><td>`Promise<Set[]>`</td><td>Gets all of the sets linked to the class</td></tr></tbody></table>
    - ### **Properties**
        | Property      	| Type     	| Description                         	|
        |---------------	|----------	|-------------------------------------	|
        | `id`          	| `number` 	| The class's ID                      	|
        | `title`       	| `string` 	| The class's title/name              	|
        | `description` 	| `string` 	| The class's course description      	|
        | `creatorId`   	| `number` 	| The ID of the class's creator       	|
        | `numMembers`  	| `number` 	| The number of members in this class 	|
        | `numSets`     	| `number` 	| The number of sets in this class    	|
- ## Folder (`Quizlet.Folder`)
    The `Folder` class allows you to see folders made by the many users of Quizlet
    - ### **Methods**
        <table><thead><tr><th>Type</th><th>Method</th><th>Parameters</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td>
        
        `static`</td><td>`getByID`</td><td>
        | Property 	| Type     	| Default  	| Description     	|
        |----------	|----------	|----------	|-----------------	|
        | `id`     	| `number` 	| Required 	| The folder's ID 	|
        </td><td>
        
        `Promise<Folder>`</td><td>Gets a folder by its ID</td></tr><tr><td>`static`</td><td>`getFromUser`</td><td>
        | Property 	| Type     	| Default  	| Description     	|
        |----------	|----------	|----------	|-----------------	|
        | `id`     	| `number` 	| Required 	| The user's ID 	|
        </td><td>
        
        `Promise<Folder[]>`</td><td>Gets all the folders that belong to a user</td></tr><tr><td>`dynamic`</td><td>`getCreator`</td><td>None</td><td>`Promise<User>`</td><td>Gets the creator of a folder</td></tr><tr><td>`dynamic`</td><td>`getSets`</td><td>None</td><td>`Promise<Set[]>`</td><td>Gets all of sets in a folder</td></tr></tbody></table>
    - ### **Properties**
        | Property      	| Type     	| Description                          	|
        |---------------	|----------	|--------------------------------------	|
        | `id`          	| `number` 	| The folder's ID                      	|
        | `creatorId`   	| `number` 	| The ID of the folder's creator       	|
        | `title`       	| `string` 	| The folder's name                    	|
        | `description` 	| `string` 	| The folder's description             	|
        | `url`         	| `string` 	| The folder's publicly accessible URL 	|
- ## Live (`Quizlet.Live`)
    When using this package to join any kind of Quizlet Live game, the classes should be setup in the following mannor:
    ```js
    // First, create a new instance of "Classic" or "Checkpoint"
    /* Quizlet Checkpoint game pins start with the letter "C" (CXX-XXX), any other pins are Quizlet Live game pins */
    const game = new Quizlet.Live.Classic();

    // Once your class is initialized, setup all the events
    /* Refer to each individual class's documentation to see what events are supported */
    game.on("question", (question, options) => {
        // Both Classic and Checkpoint game modes have this event, but each event behaves differently.
        // The main thing throughout both classes is that it is highly recommended to call the `game.answer(...)` method from within this event
        game.answer(options[0])
    })

    // After your events are prepared, you can go ahead and join the game
    game.joinGame("XXXXXX" /* The game pin */, "RedYetiDev" /* username */, "https://assets.quizlet.com/...." /* Your avatar */)
    ```
    - ### **Classic** (`Quizlet.Live.Classic`)
        - ### Methods
            <table><thead><tr><th>Type</th><th>Method</th><th>Parameters</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td>
            
            `static`</td><td>`getGame`</td><td>
            | Parameter	| Type     	| Default 	| Description  	|
            |----------	|----------	|---------	|--------------	|
            | `code`   	| `number` 	|Required   | The game code	|
            </td><td>
            
            `Promise<Object>`</td><td>Gets a game via it's code (**The return object is not typed, as you won't really ever need it, but typings may be added in the future**)</td></tr><tr><td>`dynamic`</td><td>`joinGame`</td><td>
            | Parameter 	| Type     	| Default                                                                                    	| Description                                                                                        	|
            |----------	|----------	|--------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------	|
            | `pin`    	| `number` 	| Required                                                                                   	| The game pin                                                                                       	|
            | `name`   	| `string` 	| `"Quizlet.JS Bot"`                                                                         	| The username to join with                                                                          	|
            | `image`  	| `string` 	| [`"https://assets.quizlet.com/a/j/dist/app/i/live_game/default-avatar.610344da6feae31.png"`](https://assets.quizlet.com/a/j/dist/app/i/live_game/default-avatar.610344da6feae31.png) 	| The avatar to use when joining. *(This avatar's URL must have the root domain of `*.quizlet.com`)* 	|
            </td><td>Nothing</td><td>Joins the Quizlet Live game using the information provided</td></tr><tr><td>
            
            `dynamic`</td><td>`answer`</td><td>
            | Parameter 	| Types                    	| Description                                                                                                                                                                                                                                                                                                                                                                                               	|
            |-----------	|--------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
            | `answer`  	| `string` `number` [`Term`](#set-term) 	| **`string`**: If `answer` is of type `string`, it is considered to be the content text of the correct answer<br/><br/>**`number`**: If `answer` is of type `number`, it is considered to be the index of the correct answer in the `options` array returned from the `question` event.<br/><br/>[**`Term`**](#set-term): If `answer` is an instance of [`Term`](#set-term), it is considered to contain the same text content of the correct answer 	|
            </td><td>Nothing</td><td>Answers the currently active Quizlet Live question</td></tr></tbody></table>
        - ### Properties
            | Property       	| Types      	| Description                                                                                                                                                                           	|
            |----------------	|------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
            | `active`       	| `boolean`  	| Whether the game currently active                                                                                                                                                     	|
            | `pin`          	| `string`   	| The game pin                                                                                                                                                                          	|
            | `gamemode`     	| `0` `1`    	| Whether the game is a Classic game (`1`) or a Checkpoint game (`0`)                                                                                                                   	|
            | `name`         	| `string`   	| The username that game is joining with                                                                                                                                                	|
            | `image`        	| `string`   	| The avatar that the user is using to join the game                                                                                                                                    	|
            | `token`        	| `string`   	| The multiplayer join token for the game                                                                                                                                               	|
            | `id`           	| `string`   	| The user's unique ID (Similar to a UUID)                                                                                                                                              	|
            | `gameInstance` 	| `object`   	| The game instance                                                                                                                                                                     	|
            | `statuses`     	| `string[]` 	| The status that are currently being sent between the client and the server                                                                                                            	|
            | `socket`       	| `Socket`   	| The socket that connects the client to the server (a Socket.IO connection)                                                                                                            	|
            | `set`          	| `StudySet` 	| The set that the host is using to play Quizlet Live                                                                                                                                   	|
            | `terms`        	| `Term[]`   	| The terms that currently in play. The length of this array can range between `6` and `12`                                                                                             	|
            | `type`         	| `number`   	| Whether the game is a singleplayer game (`2`), or a multiplayer game (not `0`)                                                                                                        	|
            | `teams`        	| `object[]` 	| The teams in the game                                                                                                                                                                 	|
            | `team`         	| `object`   	| My team in the game                                                                                                                                                                   	|
            | `index`        	| `number`   	| The currently active question's index                                                                                                                                                 	|
            | `streak`       	| `number`   	| How many attempts a team has made. Your team starts the game with a `streak` of `0` When your team gets a question wrong, and you have to start over, your `streak` increments by `1` 	|
            | `players`      	| `object`   	| All the players within the game                                                                                                                                                       	|
            | `gameOptions`  	| `object`   	| The game's settings                                                                                                                                                                   	|
        - ### Events
            <table><thead><tr><th>Event</th><th>Data</th><th>Description</th></tr></thead><tbody><tr><td>
            
            `answer`</td><td>
            | Property       	| Types     	| Description                                        	|
            |----------------	|-----------	|----------------------------------------------------	|
            | `streak`       	| `number`  	| The `streak` is how many tries the team has taken  	|
            | `index`        	| `number`  	| The index of the question that was answered        	|
            | `isCorrect`    	| `boolean` 	| Whether the question was answered correctly or not 	|
            | `answeredBy`   	| `object`  	| The player object of the question's answerer       	|
            | `answeredWith` 	| `Term`    	| The term that the player chose as their answer     	|
            | `answeredAt`   	| `Date`    	| The exact moment that the question was answered    	|
            </td><td>Fired when a question is answered</td></tr><tr><td>
            
            `replay`</td><td>None</td><td>Fired when the host replays the game</td></tr><tr><td>`lobby`</td><td>None</td><td>Fired when the host moves the game into the lobby, or when the player joins the lobby</td></tr><tr><td>`teams`</td><td>
            | Property   	| Types      	| Description                      	|
            |------------	|------------	|----------------------------------	|
            | `myTeam`   	| `object`   	| The team that the client is on   	|
            | `allTeams` 	| `object[]` 	| All of the teams within the game 	|
            </td><td>Fired when the teams are assigned/reassigned</td></tr><tr><td>
            
            `ended`</td><td>None</td><td>Fired when the game ends</td></tr><tr><td>`start`</td><td>None</td><td>Fired when the game starts</td></tr><tr><td>`question`</td><td>
            | Property   	| Types                 	| Description       	|
            |------------	|-----------------------	|-------------------	|
            | `question` 	| [`Term`](#set-term)   	| The question term 	|
            | `options`  	| [`Term[]`](#set-term) 	| The option terms  	|
            </td><td>
            
            Fired when it is time for the client to answer a question. *(It is **highly** recommended that the `answer` method be called within the listener for this event)*</td></tr></tbody></table>
    - ### **Checkpoint** (`Quizlet.Live.Checkpoint`)
        - ### Methods
            <table><thead><tr><th>Type</th><th>Method</th><th>Parameters</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td>
            
            `dynamic`</td><td>`joinGame`</td><td>
            | Parameter 	| Type     	| Default                                                                                    	| Description                                                                                        	|
            |----------	|----------	|--------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------	|
            | `pin`    	| `number` 	| Required                                                                                   	| The game pin                                                                                       	|
            | `name`   	| `string` 	| `"Quizlet.JS Bot"`                                                                         	| The username to join with                                                                          	|
            | `image`  	| `string` 	| [`"https://assets.quizlet.com/a/j/dist/app/i/live_game/default-avatar.610344da6feae31.png"`](https://assets.quizlet.com/a/j/dist/app/i/live_game/default-avatar.610344da6feae31.png) 	| The avatar to use when joining. *(This avatar's URL must have the root domain of `*.quizlet.com`)* 	|
            </td><td>Nothing</td><td>Joins the Quizlet Live game using the information provided</td></tr><tr><td>
            
            `dynamic`</td><td>`answer`</td><td>
            | Parameter 	| Types              	| Default | Description                                                                                                                                                                                                                                              	|
            |-----------	|--------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
            | `answer`  	| `string` `Content` 	| Required | **`string`**:<br>If `answer` is of type `string`, it is considered to be the content text of the correct answer<br><br>**`Content`**:<br>If `answer` is an instance of `Content`, it is considered to contain the same sub-content as the correct answer 	|
            </td><td>Nothing</td><td>Answers the currently active Quizlet Live question</td></tr></tbody></table>
        - ### Properties
            <table><thead><tr><th>Property</th><th>Types</th><th>Description</th></tr></thead><tbody><tr><td>
            
            `active`</td><td>`boolean`</td><td>Whether the game is currently running</td></tr><tr><td>`pin`</td><td>`number`</td><td>The game pin</td></tr><tr><td>`gamemode`</td><td>`0` `1`</td><td>Whether the game is a Checkpoint (`0`) or a Classic (`1`) game</td></tr><tr><td>`name`</td><td>`string`</td><td>The display name that the client is joining the game with</td></tr><tr><td>`image`</td><td>`string`</td><td>The URL of the avatar that the client is joining the game with</td></tr><tr><td>`token`</td><td>`string`</td><td>The checkpoint game token that the client needs to connect to server</td></tr><tr><td>`id`</td><td>`string`</td><td>The player's starting connection id *(This id is only used for socket connection. For everything else, the `uid` property is used)*</td></tr><tr><td>`socket`</td><td>`Socket`</td><td>The socket that connects the client to the server (A Socket.IO socket)</td></tr><tr><td>`uid`</td><td>`string`</td><td>The player's internal ID</td></tr><tr><td id="cp-cq">`cq`</td><td><table><thead><tr><th>Property</th><th>Types</th><th>Description</th></tr></thead><tbody><tr><td>`prompt`</td><td id="cp-content">`Content`:
            | Property 	| Types    	| Description                                                 	|
            |----------	|----------	|-------------------------------------------------------------	|
            | `text`   	| `string` 	| The content's text                                          	|
            | `image`  	| `string` 	| The URL to the content's image                              	|
            | `audio`  	| `string` 	| The URL to the content's audio *(Usually a Text-To-Speech)* 	|
            </td><td>The question's prompt</td></tr><tr><td>
            
            `answer`</td><td>`number` `string`</td><td>The question's answer</td></tr><tr><td>`options`</td><td>[`Content[]`](#cp-content)</td><td>The question's possible answers</td></tr><tr><td>`id`</td><td>`number`</td><td>The item ID for the question</td></tr><tr><td>`type`</td><td>`"WrittenQuestion"` `"MultipleChoiceQuestion"`</td><td>The question type. *(See [Excluded Features](#ef) the question types that are not supported])*</td></tr></tbody></table></td><td>The current question data</td></tr><tr><td id="cp-ic">`isCorrect`</td><td>`boolean`</td><td>Whether you were correct on the last question that you answered</td></tr></tbody></table>
        - ### Events
            <table><thead><tr><th>Event</th><th>Data</th><th>Description</th></tr></thead><tbody><tr><td>
            
            `join`</td><td>None</td><td>Fired when the client joins the game</td></tr><tr><td>`end`</td><td>None</td><td>Fired when the game has ended</td></tr><tr><td>`start`</td><td>None</td><td>Fired when the game starts</td></tr><tr><td>`answer`</td><td>[`isCorrect`](#cp-ic)</td><td>Fired when the answers have been graded</td></tr><tr><td>`disconnect`</td><td>
            | Property 	| Types 	| Description           	|
            |----------	|-------	|-----------------------	|
            | `reason` 	| `*`   	| The disconnect reason 	|     
            </td><td>Fired when the client disconnects from the socket</td></tr><tr><td>
            
            `question`</td><td>[`cq`](#cp-cq)</td><td>Fired when it is time for the client to answer a question</td></tr></tbody></table>
</details>

<details id="ef">
    <summary>

## **Excluded Features**
</summary>

The following features are not supported by Quizlet.JS at this time. I do not have Quizlet+, and am unable to implement these features.
> Most of these features are only available with Quizlet+
- `SeparatedOptionMatchingQuestion`
- `FillInTheBlankQuestion`
- `MixedOptionMatchingQuestion`
- `RevealSelfAssessmentQuestion`
- `TrueFalseQuestion`
- `SpellingQuestion`
- `FITBTextSegment`
- `FITBWrittenBlankSegment`
- `LocationAttribute`
</details>

---

## **Licensing Information**
This package is licensed under an [MIT License](license.md) by RedYetiDev.

That does mean that if you intend to extend on this package, you do need to provide proper credit.

Here is an example of what proper credit can look like:
```md
[Quizlet.JS](https://github.com/RedYetiDev/Quizlet.JS) was created by [RedYetiDev](https://github.com/RedYetiDev)
```
> [Quizlet.JS](https://github.com/RedYetiDev/Quizlet.JS) was created by [RedYetiDev](https://github.com/RedYetiDev)

---
## **Credit**
> [Got](https://github.com/sindresorhus/got) is a great Node.JS web requests package by [Sindresorhus](https://github.com/sindresorhus)

> [Socket.IO](https://socket.io/) is also a really cool WebSocket client and server software