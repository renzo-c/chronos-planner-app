import React from 'react';
import { withAuthorization } from '../Session';

const Account = () => <div>This is the Account page</div>;

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
