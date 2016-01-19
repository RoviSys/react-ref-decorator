[![Build Status](http://img.shields.io/travis/RoviSys/react-ref-decorator.svg?style=flat)](https://travis-ci.org/RoviSys/react-ref-decorator)
[![Code Climate](https://codeclimate.com/github/RoviSys/react-ref-decorator/badges/gpa.svg)](https://codeclimate.com/github/RoviSys/react-ref-decorator)
[![Test Coverage](https://codeclimate.com/github/RoviSys/react-ref-decorator/badges/coverage.svg)](https://codeclimate.com/github/RoviSys/react-ref-decorator/coverage)
[![Dependency Status](https://david-dm.org/RoviSys/react-ref-decorator.svg)](https://david-dm.org/RoviSys/react-ref-decorator)
[![devDependency Status](https://david-dm.org/RoviSys/react-ref-decorator/dev-status.svg)](https://david-dm.org/RoviSys/react-ref-decorator#info=devDependencies)

# react-ref-decorator

 > An ES7 decorator for reffing and unreffing objects (anything that implements .ref() and .unref()) in the componentWillMount() and componentWillUnmount()

## Purpose

The purpose of this module is to add some abbreviated syntax for hooking into a component's mount lifecycle. 

## Example

Lets say you have some object that needs to be tied to the mounted portion of a React component's lifecycle:

```javascript
const componentWatcher = {
  ref() {
    // do something when the component mounts
  }
  
  unref() {
    // do something else when the component unmounts
  }
};
```

You can attach it like this:

```javascript
import Ref from 'react-ref-decorator';

@Ref(componentWatcher)
class MyComponent extends Component {
  render() {
    return (
      <h1>Blah</h1>
    );
  }
}
```

The decorator also supports multiple 'reffable' arguments:
 
```javascript
import Ref from 'react-ref-decorator';

@Ref(componentWatcher1, componentWatcher2, componentWatcher3)
class MyComponent extends Component {
  render() {
    return (
      <h1>Blah</h1>
    );
  }
}
```

Now when the component mounts and unmounts your componentWatchers ref/unref functions will be called respectively.