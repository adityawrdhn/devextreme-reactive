import * as React from 'react';
import * as PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: theme.spacing.unit * 50,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,
    margin: '0 auto',
    transform: 'translateY(20%)',
  },
});

const ContainerBase = ({
  children, classes, className, ...restProps
}) => (
  <Paper
    className={classNames(classes.root, className)}
    {...restProps}
  >
    {children}
  </Paper>
);

ContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ContainerBase.defaultProps = {
  className: undefined,
};

export const Container = withStyles(styles)(ContainerBase, { name: 'Container' });
