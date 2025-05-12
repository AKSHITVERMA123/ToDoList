import React from 'react';

const ErrorHandling = () => {

    const handleClick = () => {

        let a = 56;
      
        let promise = new Promise((resolve,reject) => {
            // resolve(101);  
            if(a){
                reject(new Error("New Error Comes"));
            }
            else
            {
            resolve(101);
            }
            console.log(`a = ${a}`);
            reject(new Error("New Error Comes"));
        })
        console.log(promise);
        
        // Promise Chaining
        
        promise.then((values) => {
            console.log(values);
            return "New Value";
        }).then((event) => {
            console.log(event);
            return "40";
        }).then((secondEvent) => {
            console.log(secondEvent);
        }).catch((error) => {
            console.log(error);
            console.log(`a = ${a}`);
            a = a.toLowerCase();
        }).catch((error) => {
            console.log(`THIS IS NEW ERROR COMES + ${error}`);
        });
        // }
        // catch {
        //     alert("This is error");
        //     const error=new Error("alert Message This is an Error");
        //     console.log(error);
        //     console.error(error);
        // }
    }

    return (
        <div>
            <h3>Error Handling</h3>
            <button className="ErrorHandling" onClick={handleClick}>
                Click
            </button>
        </div>
    )
}

export default ErrorHandling;