import Ref from '../../src/';

const stylesheet = {
  ref() {
    this.reffed = true;
  } ,
  unref() {
    this.reffed = false;
  }
};

@Ref(stylesheet)
class FakeComponent {
  constructor() {
    this.counter = 0;
  }

  componentWillMount() {
    this.counter++;
  }

  componentWillUnmount() {
    this.counter--;
  }
}

describe('Ref', () => {
  describe('Reffable', () => {
    const component = new FakeComponent();

    beforeEach(() => {
      spy(stylesheet, 'ref');
      spy(stylesheet, 'unref');
    });

    it('should have been reffed', () => {
      component.componentWillMount();
      expect(stylesheet.ref).to.have.been.calledOnce;
    });

    it('should have called the original componentWillMount function', () => {
      expect(component.counter).to.be.equal(1);
    });

    it('should have been unreffed', () => {
      component.componentWillUnmount();
      expect(stylesheet.unref).to.have.been.calledOnce;
    });

    it('should have called the original componentWillUnmount function', () => {
      expect(component.counter).to.be.equal(0);
    });

  });
});
