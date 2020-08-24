import React, { Component } from "react";
import style1 from "./Form.module.css";
import style2 from "./Form2.module.css";
import "./Form.css";
import { CSSTransition } from "react-transition-group";
import fadePopUp from "./fadePopUp.module.css";
import ErrorPopUp from "./errorPopUp.module.css";

export default class NewForm extends Component {
  state = {
    accounts: [],
    active: false,
    activeStyle: false,
    name: "",
    email: "",
    acountType: "",
    comment: "",
    error: false,
    erroremail: false,
    errorunique: false,
    submited: false,
  };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("style"))) {
      this.setState({ activeStyle: JSON.parse(localStorage.getItem("style")) });
    }
  }
  selectorHandler = (e) => {
    const select = document.querySelector(".selected");

    select.textContent = e.target.textContent;
    this.setState({ active: false });
  };
  handleSubmit = (e) => {
    if (
      this.state.name.length < 2 ||
      this.state.email.length < 2 ||
      this.state.acountType.length < 2
    ) {
      this.setState({ error: true });
      e.preventDefault();
      this.setState({ name: "", email: "", acountType: "", comment: "" });
      setTimeout(() => {
        this.setState(() => ({ error: false }));
      }, 3000);
      return;
    }

    if (!this.state.email.includes("@")) {
      e.preventDefault();
      this.setState({ erroremail: true });
      this.setState({ email: "" });
      setTimeout(() => {
        this.setState(() => ({ erroremail: false }));
      }, 3000);
      return;
    }

    e.preventDefault();
    const account = {
      name: this.state.name,
      email: this.state.email,
      acountType: this.state.acountType,
      comment: this.state.comment,
    };
    this.setState((prevState) => {
      if (this.state.accounts.find((item) => item.email === this.state.email)) {
        setTimeout(() => {
          this.setState(() => ({ errorunique: false }));
        }, 3000);
        return { errorunique: true, accounts: [...prevState.accounts] };
      } else {
        setTimeout(() => {
          this.setState(() => ({ submited: false }));
        }, 3000);
        return { submited: true, accounts: [...prevState.accounts, account] };
      }
    });
    this.setState({ name: "", email: "", acountType: "", comment: "" });
  };
  render() {
    let styles = null;
    this.state.activeStyle ? (styles = style2) : (styles = style1);
    return (
      <div className={styles.container}>
        <CSSTransition
          in={this.state.error}
          timeout={500}
          classNames={ErrorPopUp}
          unmountOnExit
        >
          <div className={styles.error}>all fields are required</div>
        </CSSTransition>
        <CSSTransition
          in={this.state.errorunique}
          timeout={500}
          classNames={ErrorPopUp}
          unmountOnExit
        >
          <div className={styles.error}>Email exist in system</div>
        </CSSTransition>
        <CSSTransition
          in={this.state.submited}
          timeout={500}
          classNames={ErrorPopUp}
          unmountOnExit
        >
          <div className={styles.submited}>Your Form is submited</div>
        </CSSTransition>

        <div className={styles.titlecontainer}>
          <h2 className={styles.title}>JOIN CURRENT TODAY</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.switchcontainer}>
          <label className={styles.labelswitch}>
            <div className={styles.toggle}>
              <input
                onClick={() => {
                  this.setState((prevState) => {
                    return { activeStyle: !prevState.activeStyle };
                  });
                  localStorage.setItem("style", !this.state.activeStyle);
                }}
                className={styles.togglestate}
                id='toggle'
                type='checkbox'
                defaultChecked={
                  localStorage.getItem("style") === "true" ? "true" : ""
                }
              ></input>
              <div className={styles.indicator}></div>
            </div>
          </label>
        </div>

        <form className={styles.form}>
          <div className={styles.flexcontainer}>
            <div className={`${styles.inputcontainer} ${styles.inputname}`}>
              <label className={styles.label}>Your Name </label>
              <input
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                className={styles.input}
                placeholder='Who are you?'
                id='name'
                type='name'
              ></input>
            </div>
            <div className={`${styles.inputcontainer} ${styles.inputemail}`}>
              <label className={styles.label}>Your Email </label>
              <CSSTransition
                in={this.state.erroremail}
                timeout={500}
                classNames={ErrorPopUp}
                unmountOnExit
              >
                <div className={styles.errorEmail}>Wrong Email</div>
              </CSSTransition>
              <input
                className={styles.input}
                placeholder='you@gmail.com'
                id='email'
                type='email'
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></input>
            </div>
            <div className={`${styles.inputcontainer} ${styles.inputaccount}`}>
              <label className='label'>Account </label>
              <div className='containerselect'>
                <div
                  onClick={() => {
                    this.setState({ active: true });
                  }}
                  className='selected'
                >
                  Individual
                </div>
                <CSSTransition
                  in={this.state.active}
                  timeout={500}
                  classNames={fadePopUp}
                  unmountOnExit
                >
                  <div className='selectedbox'>
                    <div className='optioncontainer active'>
                      <div
                        onClick={(e) => {
                          this.selectorHandler(e);
                          this.setState({ acountType: e.target.textContent });
                        }}
                        className='option'
                      >
                        <input
                          type='radio'
                          className='radio'
                          id='auto'
                          name='category'
                        ></input>
                        <label>Individual</label>
                      </div>
                      <div
                        onClick={(e) => {
                          this.selectorHandler(e);
                          this.setState({ acountType: e.target.textContent });
                        }}
                        className='option'
                      >
                        <input
                          type='radio'
                          className='radio'
                          id='man'
                          name='category'
                        ></input>
                        <label>Parent</label>
                      </div>
                      <div
                        onClick={(e) => {
                          this.selectorHandler(e);
                          this.setState({ acountType: e.target.textContent });
                        }}
                        className='option'
                      >
                        <input
                          type='radio'
                          className='radio'
                          id='body'
                          name='category'
                        ></input>
                        <label>Teen</label>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
            <div className={`${styles.inputcontainer} ${styles.inputmessage}`}>
              <label className={styles.label}>Message</label>
              <textarea
                value={this.state.comment}
                onChange={(e) => {
                  this.setState({ comment: e.target.value });
                }}
                className={styles.textarea}
                rows='4'
                cols='50'
                name='comment'
                form='usrform'
                placeholder='How did you hear about Current?'
              ></textarea>
            </div>
          </div>
          <button
            onClick={(e) => {
              this.handleSubmit(e);
              this.props.optimListener();
            }}
            type='submit'
            className={styles.button}
          >
            <span className={styles.buttonhelper}></span>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
