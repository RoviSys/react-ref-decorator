import tail from 'lodash.tail';

export default function Ref(refTarget) {
  const args = tail(arguments);
  return function decorator(Component) {
    return class ReferencingComponent extends Component {
      componentWillMount() {
        refTarget.ref(...args);
        if(super.componentWillMount) {
          super.componentWillMount();
        }
      }

      componentWillUnmount() {
        if(super.componentWillUnmount) {
          super.componentWillUnmount();
        }
        refTarget.unref(...args);
      }
    };
  };
}