# Handling Events

```jsx
class ClassName extends Component{
    state={};

    handleEvent(){
      //event body
    }

    render(){
        return (
         <div>
            <button onClick={this.handleEvent}></button>
         </div>
        )
    }
}

export default ClassName;
```
