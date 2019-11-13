import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import FormContext from '../../FormContext';
import DateContext from './DateContext';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
import Day from './day';
import Month from './month';
import Year from './year';

const valuePropType = {
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string
};

export default class DateInput extends PureComponent {
  static contextType = FormContext;

  static Day = Day;

  static Month = Month;

  static Year = Year;

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: stylePropType,
    label: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    name: PropTypes.string.isRequired,
    autoSelectNext: PropTypes.bool,
    value: valuePropType
  };

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    label: '',
    hint: '',
    error: '',
    id: '',
    labelHtmlFor: '',
    autoSelectNext: false,
    value: { day: '', month: '', year: '' }
  };

  static sanitizeInput = (type, value = '') => {
    const onlyNumbers = String(value).replace(/\D/g, '');
    if (type === 'day') {
      return onlyNumbers.slice(0, 2);
    }
    if (type === 'month') {
      return onlyNumbers.slice(0, 2);
    }
    return onlyNumbers.slice(0, 4);
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.value,
      multiErrors: {}
    };
    this.monthRef = React.createRef();
    this.yearRef = React.createRef();
    this.initialiseComponent();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { passBackError, value: contextValue } = this.context;
    const { name, error, value: propsValue } = this.props;
    const { value: stateValue } = this.state;
    // console.log('==============')
    // console.log('contextValue    ' + JSON.stringify(contextValue));
    // console.log('previous props  ' + JSON.stringify(prevProps.value));
    // console.log('current props   ' + JSON.stringify(propsValue));
    // console.log('previous state  ' + JSON.stringify(prevState.value));
    // console.log('current state   ' + JSON.stringify(stateValue));
    // console.log('==============');
    if (prevProps.value.day !== propsValue.day ||
      prevProps.value.month !== propsValue.month ||
      prevProps.value.year !== propsValue.year) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value: propsValue });
    }
    if (passBackError) {
      passBackError(name, !!error, error);
    }
  };

  registerSingleComponent = () => {
    const { passBackError, registerComponent } = this.context;
    const { name, error } = this.props;
    if (passBackError) {
      passBackError(name, !!error, error);
    }
    if (registerComponent) {
      const { value } = this.state;
      registerComponent(name, value);
    }
  };

  registerMultiComponent = (defaultValue, defaultError) => {
    const { passBackError, registerComponent } = this.context;
    const { name, error } = this.props;
    if (registerComponent) registerComponent(name, defaultValue);
    if (passBackError) {
      const returnedErrors = {};
      let hasError = false;
      Object.keys(defaultError).forEach(key => {
        if (defaultError[key]) {
          returnedErrors[key] = defaultError[key];
          hasError = true;
        }
      });
      if (error) {
        returnedErrors.root = error;
        hasError = true;
      }
      this.setState({ multiErrors: returnedErrors }, () => {
        passBackError(name, hasError, returnedErrors);
      });
    }
  };

  registerRef = (type, ref) => {
    if (type === 'month') {
      this.monthRef = ref;
    } else if (type === 'year') {
      this.yearRef = ref;
    }
  };

  autoSelectNextFunction = (type, value) => {
    if (type === 'day' && value.length === 2) {
      if (this.monthRef.current !== null) this.monthRef.focus();
    } else if (type === 'month' && value.length === 2) {
      if (this.yearRef.current !== null) this.yearRef.focus();
    }
  };

  passBackErrorFromComponent = (element, value) => {
    const { name } = this.props;
    const { passBackError } = this.context;
    const { multiErrors } = this.state;
    const editedMultiErrors = multiErrors;
    if (value) {
      editedMultiErrors[element] = value;
    } else if (Object.keys(multiErrors).includes(element)) {
      delete editedMultiErrors[element];
    }
    if (multiErrors !== editedMultiErrors) {
      this.setState({ multiErrors: editedMultiErrors }, () => {
        const hasError = Object.keys(editedMultiErrors).length > 0;
        passBackError(name, hasError, editedMultiErrors);
      });
    }
  };

  handleInput = (type, newValue) => {
    const { autoSelectNext, name } = this.props;
    const { value } = this.state;
    const sanitizedValue = DateInput.sanitizeInput(type, newValue);
    const updatedData = { ...value, [type]: sanitizedValue };
    this.setState({ value: updatedData }, () => {
      if (autoSelectNext) this.autoSelectNextFunction(type, sanitizedValue);
      const { updateFormState } = this.context;
      if (updateFormState) {
        updateFormState(name, updatedData);
      }
    });
  };

  initialiseComponent() {
    const { children } = this.props;
    let multiComponentMode = false;
    const defaultError = {};
    const defaultValue = {};
    React.Children.forEach(children, child => {
      if (child === null) return;
      const { type } = child;
      const { value, error } = child.props;
      if (type === DateInput.Day) {
        defaultValue.day = value;
        defaultError.day = error;
        multiComponentMode = true;
      } else if (type === DateInput.Month) {
        defaultValue.month = value;
        defaultError.year = error;
        multiComponentMode = true;
      } else if (type === DateInput.Year) {
        defaultValue.year = value;
        defaultError.year = error;
        multiComponentMode = true;
      }
    });

    if (multiComponentMode) {
      this.registerMultiComponent(defaultValue, defaultError);
    } else {
      this.registerSingleComponent();
    }
  }

  render() {
    const {
      children,
      className,
      style,
      label,
      id,
      hint,
      error,
      labelHtmlFor,
      name,
      value: propValue,
      autoSelectNext,
      ...rest
    } = this.props;
    const { value, multiErrors } = this.state;
    const parentError = Object.keys(multiErrors).length > 0 ? false : !!error;
    const contextValue = {
      handleInput: this.handleInput,
      registerRef: this.registerRef,
      passBackError: this.passBackErrorFromComponent,
      parentError,
      name,
      value,
    };

    return (
      <>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <div className={className} style={style} id={id}>
          <DateContext.Provider value={contextValue}>
            {children || (
              <>
                <Day {...rest} value={propValue.day} />
                <Month {...rest} value={propValue.month} />
                <Year {...rest} value={propValue.year} />
              </>
            )}
          </DateContext.Provider>
        </div>
      </>
    );
  }
}
