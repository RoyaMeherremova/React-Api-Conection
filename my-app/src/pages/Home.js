import React, { useState } from 'react'
import Product from '../components/common/Product'
import Header from '../components/layout/Header'
import '../assets/css/home.css';
import { Button } from 'reactstrap';

function Home() {
    const productName = "Iphone";
    const products = ["Iphone", "Nokia", "Samsung", "Xiomi"];

    const [num,setNum] = useState(1);

    const increment = () => {
        if(num == 10){
            return;
        }
        setNum(num +1);
    }
    const decrement = () => {
        if(num == 0){
            return;
        }
        setNum(num -1);
    }
    return (
        <div>
            <main>
                <section id='products'>
                    <div className='container'>
                        <h1 className='text-center py-3'>Products</h1>
                        <div className='row'>
                            {
                                products.map(function (item, i) {
                                    return <div className='col-3'>
                                        <Product productName={item} />
                                    </div>
                                })
                            }

                        </div>
                        <h1>{num}</h1>
                        <Button onClick={increment} color="success mt-3">
                            Increment
                        </Button>
                        <Button onClick={decrement} color="warning mt-3 mx-2">
                            Decrement
                        </Button>

                    </div>
                </section>


            </main>

        </div>
    )
}

export default Home
