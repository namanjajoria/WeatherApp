import './Form.css'
export default function Form1() {
    return (
        <>
            <div className="row win">
                <div className="col-sm-12 col-md-4 col-6"></div>
                <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center image pt-2">
                    <form className='d-flex flex-column justify-content-center align-items-center image pt-5 pb-4'>
                        <h1>USER <font color="red">LOGIN</font></h1>
                        <div className="fs-1">..........................</div><br></br>

                        <label><h4 className="me-5 pe-4">USERNAME</h4></label>
                        <input type={'text'} className="me-4 rounded-3"></input><br></br>
                        <h4 className="me-5 pe-4">PASSWORD</h4>
                        <input type={'password'} className="me-4 rounded-3" id="p"></input><br></br>

                        <h5 className='me-1'>CONFIRM PASSWORD</h5>
                        <input type={'password'} className="me-4 rounded-3" id="cp"></input>
                        <p id="p1"></p>

                        <label className='me-5'>
                            <input type={'checkbox'} name={'checkbox'} className="me-1"></input><span className="fs-5">Remember me</span>
                        </label>
                        <br></br>
                        <button type="button" class="btn btn-primary ps-4 pe-4 pt-2 pb-2 me-4 button">Login</button>
                        <div className="fs-1 me-2">...................</div><br></br>
                        <button class="btn btn-primary ps-4 pe-4 pt-2 pb-2 me-4 button" type={'reset'} value={'reset'}>Reset</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-4"></div>
            </div>

        </>
    )
}

