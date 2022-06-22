import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface SelectBoxItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    isActive?: boolean,
    setSelectedSelectBoxItemValue?: React.Dispatch<React.SetStateAction<any>>,
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>,
}

const SelectBoxItem = ({
    value,
    name,
    Icon,
    isActive,
    setSelectedSelectBoxItemValue,
}: SelectBoxItemProps) => (
    <button
        className={ classNames(
            isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            `group flex items-center justify-between px-4 py-2.5 sm:text-sm w-full
            group-hover:text-gray-500 hover:bg-gray-100 text-left`
        ) }
        value={ value }
        onClick={ () => setSelectedSelectBoxItemValue!(value) }
    >
        <div className="flex group-hover:text-gray-900 truncate">
            { Icon ? (
                <Icon className={ classNames(
                    'h-5 w-5 mr-3 text-gray-400 flex-none'
                ) } aria-hidden="true"/>
            ) : null }
            <span className="whitespace-nowrap truncate">{ name }</span>
        </div>
    </button>
);

export default SelectBoxItem;
