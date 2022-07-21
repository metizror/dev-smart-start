import React, { Component, Fragment } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navmethod: false,
            toggleModal: false,
            scheduleToggle: false
        };
        this.input = React.createRef();
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModalFunc = this.toggleModalFunc.bind(this);
        this.scheduleToggleFunc = this.scheduleToggleFunc.bind(this);
    }



    toggleNav() {
        this.setState({
            navmethod: !this.state.navmethod
        });
    }
    scheduleToggleFunc() {
        this.setState({
            scheduleToggle: !this.state.scheduleToggle
        })
    }
    // ToggleModal click get started
    toggleModalFunc(e) {
        this.setState({
            toggleModal: !this.state.toggleModal
        });
    }
    // Sticky Header
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 100
            });
        }, false);
    }
    // Mobile menu
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }

    triggerChild = (e) => {
        let subMenu = '';

        subMenu = (this.getNextSibling(e.target, '.sub-menu') !== undefined) ? this.getNextSibling(e.target, '.sub-menu') : null;

        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'sub-menu' : 'sub-menu d-block';
        }
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default HeaderComponent;