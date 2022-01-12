# this is the old code that is not working
# def plant_recommendation(care):
#     if care = 'low':
#         print('aloe')
#     elif care == 'medium':
#         print('pothos')
#     elif care == 'medium':
#         print('orchid')

# plant_rec('low')
# plant_recommendation('medium')
# plant_recommendation('high')

# this is the code after debugging 

def plant_recommendation(care):
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    elif care == 'high':
        print('orchid')

plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')
