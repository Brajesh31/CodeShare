import React from 'react';
import { Avatar, Tooltip, Group } from '@mantine/core';
const UserPresence: React.FC = () => {
  const onlineUsers = [{
    id: 1,
    name: 'You',
    color: 'blue'
  }, {
    id: 2,
    name: 'John Doe',
    color: 'green'
  }, {
    id: 3,
    name: 'Jane Smith',
    color: 'purple'
  }];
  return <Group spacing="xs">
      {onlineUsers.map(user => <Tooltip key={user.id} label={user.name} withArrow position="bottom">
          <Avatar size="sm" radius="xl" color={user.color} src={user.id !== 1 ? `https://i.pravatar.cc/150?u=${user.id}` : undefined}>
            {user.name.charAt(0)}
          </Avatar>
        </Tooltip>)}
    </Group>;
};
export default UserPresence;