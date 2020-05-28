import * as React from 'react';

/**
 * Свойства компонента
 *
 * @prop {Function} onEdit Коллбэк на изменение элемента перечня САДД.
 * @prop {SaddDictionaryActions} actions Диспатч экшена на удаление строки по идентефикатору 'ID'.
 * @prop {number} itemId Идентификатор элемента перечня САДД.
 * @prop {IUser} user Данные о пользователе.
 */
interface IProps {
    // actions: SaddDictionaryActions;
    // onEdit: (itemId: number) => void;
    // itemId: number;
    // user: IUser;
}

/**
 * Компонент, отображающий панель возможных действий над элементом таблицы.
 */
const ActionPanel: React.FC<IProps> = (props: IProps) => {
    const {itemId, onEdit, actions, user} = props;
    const actionsProvider = SaddDictionaryActionsProvider(itemId, onEdit, actions, user);
    const {EDIT, REMOVE} = actionsProvider;
    const actionButtons: JSX.Element[] = [EDIT, REMOVE]
        .filter((action) => (action.enabled()))
        .map((action, index) => (
            <Button
                key={index}
                className={action.className}
                onClick={action.action}
                title={action.title}
            >
                <i className={action.iconClassName} />
            </Button>
        ));

    return (
        <div>
            {actionButtons}
        </div>
    )
}

export default ActionPanel
