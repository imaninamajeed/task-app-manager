import { InformationCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TaskPriority({ priority }: { priority: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold',
                {
                    'bg-green-100 text-green-800': priority === 'Low',
                    'bg-yellow-100 text-yellow-800': priority === 'Medium',
                    'bg-red-100 text-red-800': priority === 'High',
                },
            )}
        >
            {priority === 'Low' ? (
                <>
                    Low Priority
                    <InformationCircleIcon className="ml-1 w-4 h-4 text-green-800" />
                </>
            ) : null}
            {priority === 'Medium' ? (
                <>
                    Medium Priority
                    <ExclamationTriangleIcon className="ml-1 w-4 h-4 text-yellow-800" />
                </>
            ) : null}
            {priority === 'High' ? (
                <>
                    High Priority
                    <ExclamationCircleIcon className="ml-1 w-4 h-4 text-red-800" />
                </>
            ) : null}
        </span>
    );
}