# Reference of Notes + Guides for React

## The .bind() method

[Source](https://codeburst.io/binding-functions-in-react-b168d2d006cb)

Every Javascript object has three built-in methods that can change the ‘this’ context for a function. The first two, .call() and .apply() are similar in that the first argument you pass to them is the new context and then you can pass them individual arguments or an array respectively. What they also have in common is that the function you call them on is then run immediately.

That won’t do in this case, since we want handleClick() to only be run when the button is clicked. The third built-in Javascript method can do this.

The .bind() method is similar to the other two in that you pass it the context you want to bind the function to, but it does not immediately run the function.

Instead a copy of the function with the switched context is returned.

This copy can then be run whenever you want. Like when a button is clicked.

### .bind Constructor Way

Since the ‘this’ context of App is the one that handleClick() should be using, we have to use the .bind() method on it in the constructor for that component. If this line is added to the constructor, all will work as expected:

```
this.handleClick = this.handleClick.bind(this);
```

The first this.handleClick refers to the handleClick() method. Since this is done in the constructor, ‘this’ refers to App.

The second this.handleClick is also referring to the same handleClick() method but we are now calling .bind() on it.

The final ‘this’ is the context we are passing to .bind() and it is referring to the App context.

### .bind() Arrow Function Way

```
<button onClick={() => this.handleClick()}>Click Me!</button>
```

The results are exactly the same as before. **<u>Arrow functions don’t define their own context so ‘this’ is set to the enclosing context.</u>** Which we can see from the console.log() inside of render() is already set to ‘App’.
