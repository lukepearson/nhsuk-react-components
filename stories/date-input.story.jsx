import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import {
  Form,
  DateInput,
} from '../src/components/form';
import { Row } from '../src/components/layout';
import Fieldset from '../src/components/fieldset';

const FormWrapper = ({ children }) => {
  return (
    <Row>
      <Row.Column width="one-half">
        <Form title="Dates" style={{ margin: 75 }}>
          {children}
        </Form>
      </Row.Column>
    </Row>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

storiesOf('DateInput', module).add('Date range', () => {
  return (
    <FormWrapper withErrors>
      <Fieldset title="Date range">
        <DateInput
          name="date-from"
          style={{ marginBottom: 10 }}
          label="Date from"
          autoSelectNext
        />

        <DateInput
          name="date-to"
          style={{ marginBottom: 10 }}
          label="Date from"
          value={{ day: "02", month: "06", year: "1999" }}
          autoSelectNext
        />
      </Fieldset>
    </FormWrapper>
  );
});
