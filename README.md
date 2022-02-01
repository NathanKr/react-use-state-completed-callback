<h2>Motivation</h2>
React set state asynchronously  So how do you invoke a callback when the set state function has completed? It is possible for a class component because setState receives callback as the second argument. But how to do this for useState

<h2>Solution</h2>
use useEffect with state in the dependency array


<h2>Setup</h2>
<ul>
<li>npm i</li>
<li>npm run dev</li>
</ul>
