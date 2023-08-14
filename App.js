{/* <div id=parent>
    <div id=child>
        <h1 id="heading">hello React world!</h1>
                <h1 id="heading">hello React world!</h1>

    </div>
</div> */}





const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },

        [React.createElement("h1", { id: "heading" }, "hello React world!"), 
        React.createElement("h2", { id: "heading" }, "hello React world!")]
    ));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

