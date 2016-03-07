import React from 'react';
import assert from 'power-assert';
import { shallow, mount } from 'enzyme';
import * as sinon from 'sinon';
import Foo from '../src/Foo';

class ToDoItem extends React.Component {
    render() {
        const { item, onCompleteChange } = this.props;
        return (
            <div className="item">
              <span className="item-mark">{item.complete ? '✓' : '•'}</span>
              <span className="item-title">{item.title}</span>
              <a className="item-button" onClick={() => onCompleteChange(item, !item.complete)}>
                Mark as {item.complete ? 'Pending' : 'Complete'}
              </a>
            </div>
        );
    }
}

function mockItem(overrides) {
    // … create mock ToDo Item
}

describe('<ToDoItem />', () => {
    it('renders the title', () => {
        const item = mockItem();
        assert(shallow(<ToDoItem item={item} />).text().indexOf(item.title) !== -1);
    });
    it('renders a check mark when complete', () => {
        const item = mockItem({ complete: true });
        assert(shallow(<ToDoItem item={item} />).find('.item-mark').text() === '✓');
    });
    it('renders a bullet when not complete', () => {
        const item = mockItem({ complete: false });
        assert(shallow(<ToDoItem item={item} />).find('.item-mark').text() === '•');
    });
    it('calls onCompleteChange handler with the right arguments when clicked', () => {
        const spy = sinon.spy();
        const item = mockItem();
        const wrapper = shallow(<ToDoItem item={item} onCompleteChange={spy} />);
        wrapper.find('.item-button').simulate('click');
        assert(spy.calledOnce === true);
        assert(spy.calledWith(item, false) === true);
    });
});

describe('<Foo />', () => {
    describe('#shallow', () => {
        it('#contains', () => {
            assert(shallow(<Foo />).contains(<div className='foo' />));
        });
        it('#is', () => {
            assert(shallow(<Foo />).is('.foo'));
        });
    });
    describe('#mount', () => {
        it('#find', () => {
            assert(mount(<Foo />).find('.foo').length === 1);
        });
    });
});
