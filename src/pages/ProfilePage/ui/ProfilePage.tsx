import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile/model/slices/profileSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchProfileData, ProfileCard } from 'entities/Profile';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfileCard />
        </DynamicModuleLoader>
    );
}

export default ProfilePage;
