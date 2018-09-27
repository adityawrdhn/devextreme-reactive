import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import { ViewState } from '@devexpress/dx-react-scheduler';

import {
  Scheduler,
  WeekView,
  Toolbar,
  Appointments,
  MonthView,
  ViewSwitcher,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../../../demo-data/month-appointments';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2018-07-25"
          />

          <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <WeekView
            name="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView />

          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}