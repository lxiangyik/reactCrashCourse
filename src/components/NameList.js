export const NameList = () => {
    const names = ['Lee','Xiang', 'Yik']
    return <div>
        {
            names.map((name) =>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
}