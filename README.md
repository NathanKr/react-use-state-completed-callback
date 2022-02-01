<h2>Motivation</h2>
React set state asynchronusely . So how do you invoke a callback when the set state function has completed ? It it possible for class component because setState recive callback as second argument. But how to do this for useState

<h2>Solution</h2>
use useEffect with state in the dependecny array


<h2>Setup</h2>
<ul>
<li>npm i</li>
<li>npm run dev</li>
</ul>