const ChangeInputData = ({data, setData}: {data: string, setData: (data: string) => void}) => {
    return (
        <div className='flex space-x-[10px] mt-[10px]'>
            <input onChange={(e) => setData(e.target.value)} value={data} className='bg-gray-col focus:outline-none py-[10px] px-[15px] rounded-full' type="text"/>
            <button className='bg-green-col rounded-full py-[10px] px-[15px]'>
                Зберегти
            </button>
        </div>
    );
};

export default ChangeInputData;