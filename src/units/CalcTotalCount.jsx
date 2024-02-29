export const calcTotalCount = (item) => {
    return item.reduce((sum, obj) => obj.count + sum, 0);
};