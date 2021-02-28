import * as actions from './shop.actiontype';

export const updateShopCollection = (collections) => ({
	type: actions.UPDATE_SHOP_COLLECTION,
	payload: collections
});
