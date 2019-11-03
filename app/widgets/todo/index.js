import { Repeater, Menu, Button, MenuItem } from 'cx/widgets';
import DashboardWidget from '../DashboardWidget';
import { createFunctionalComponent } from 'cx/ui';
import { useState, useTrigger } from 'cx/hooks';

const TodoItem = createFunctionalComponent(({ text }) => {
    return (
        <cx>
            <div class="box_item pad" tabIndex={0} text={text} />
        </cx>
    );
});

export const Todo = createFunctionalComponent(({ width, height }) => {
    let tasks = useState([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
    ]);

    return (
        <cx>
            <DashboardWidget width={width} height={height} title="TODO">
                <div>
                    <Menu>
                        <Repeater records={tasks}>
                            <MenuItem>
                                <TodoItem text-bind="$record.text" />
                            </MenuItem>
                        </Repeater>
                        <MenuItem
                            onClick={() => {
                                tasks.update(t => [...t, { text: 'New Task' }]);
                            }}
                        >
                            Add Task
                        </MenuItem>
                    </Menu>
                </div>
            </DashboardWidget>
        </cx>
    );
});
