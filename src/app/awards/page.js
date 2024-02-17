export default function Awards() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
            <div className='w-full 2xl:w-2/3 md:p-4 pt-4 px-2'>
                <div className='block max-w-sm p-6 bg-primary rounded-lg text-center mt-4'>
                    <div className='text-xl font-bold'>President's List</div>
                    <div className='text-sm font-normal'>Daytona State College</div>
                    <div className='text-sm italic mt-1'>
                        Recognition for achieving a 4.0 semester GPA
                    </div>
                    <div className='badge badge-secondary mt-4 p-3 font-semibold mr-2'>
                        Spring 2023
                    </div>
                    <div className='badge badge-secondary mt-4 p-3 font-semibold'>
                        Summer 2023
                    </div>
                    <div className='badge badge-secondary mt-4 p-3 font-semibold ml-2'>
                        Fall 2023
                    </div>
                </div>
                <div className='block max-w-sm p-6 bg-primary rounded-lg text-center mt-6'>
                    <div className='text-xl font-bold'>Dean's List</div>
                    <div className='text-sm font-normal'>Daytona State College</div>
                    <div className='text-sm italic mt-1'>
                        Recognition for achieving above a 3.75 semester GPA
                    </div>
                    <div className='badge badge-secondary mt-4 p-3 font-semibold mr-2'>
                        Fall 2020
                    </div>
                    <div className='badge badge-secondary mt-4 p-3 font-semibold'>
                        Summer 2021
                    </div>
                </div>
            </div>
        </div>
    );
}
